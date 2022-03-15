import {
  CACHE_MANAGER,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map, lastValueFrom, catchError } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import User from 'src/user/entities/user.entity';
import { PaystackService } from 'src/paystack/paystack.service';
import { WalletService } from 'src/wallet/wallet.service';
import { Connection, Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { UserService } from 'src/user/user.service';
import { MonnifyService } from 'src/monnify/monnify.service';
import { FlutterwaveService } from 'src/flutterwave/flutterwave.service';
import { SettingsModule } from 'src/settings/settings.module';
import {
  BankServices,
  BANK_SERVICES,
  Services,
} from 'src/common/types/service.type';
import { ServicesSettings } from 'src/common/types/settings.type';
import { Cache } from 'cache-manager';
import { SettingsService } from 'src/settings/settings.service';
import { CreateVirtualAccountDto } from './dto/create-virtual-account.dto';
import { CreateReservedAccountDto } from 'src/flutterwave/dto/create-reserved-account.dto';
import { FWWithdrawalDto } from './dto/withdrawal.dto';
import { getTransactionReference } from 'src/utils/random-generators';
import {
  TRANSACTION,
  TransactionStatus,
  TRANSACTIONSTATUS,
  TransactionType,
} from 'src/common/types/status.type';
import { TransactionRepository } from './repositories/transaction.repository';
import { userInfo } from 'os';
import { CURRENCY } from 'src/common/types/currency.type';
import { InitiateMNTransferDto } from 'src/monnify/dto/initiate-transfer.dto';

const { FLUTTERWAVE, MONNIFY } = BANK_SERVICES;

@Injectable()
export class TransactionsService {
  private currentService: FlutterwaveService | MonnifyService;
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private connection: Connection,
    @InjectRepository(TransactionRepository)
    private transactionRepository: TransactionRepository,
    private readonly paystackService: PaystackService,
    private readonly walletService: WalletService,
    private readonly flutterwaveService: FlutterwaveService,
    private readonly monnifyService: MonnifyService,
    private readonly settingsService: SettingsService,
  ) {}

  async initiateWithdrawal(
    dto: FWWithdrawalDto,
    user: User,
    service: BankServices,
  ) {
    /*if (user.wallet[0].balance < dto.amount) {
      throw new HttpException('Insufficient balance', HttpStatus.BAD_REQUEST);
    }*/
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const reference = await getTransactionReference();
      const mockReferencePass = 'dfs23fhr7ntg0293039_PMCKDU_1';
      const mockReferenceFail = 'dfs23fhr7ntg0293039_PMCK_ST_FDU_1';
      const narration = 'Tapmoney Withdrawal';

      let payload;
      let newTransaction;
      let result;

      if (service === BANK_SERVICES.FLUTTERWAVE) {
        payload = {
          ...dto,
          reference: mockReferencePass,
          narration,
        };
      }

      if (service === MONNIFY) {
        payload = {
          amount: dto.amount,
          reference,
          narration,
          destinationBankCode: dto.account_bank,
          destinationAccountNumber: dto.account_number,
          currency: dto.currency,
        };

        try {
          newTransaction = await queryRunner.manager.create(Transaction, {
            accountNumber: dto.account_number,
            accountBank: dto.account_bank,
            amount: dto.amount,
            currency: dto.currency,
            reference,
            userId: user.id,
            status: TRANSACTIONSTATUS.QUEUED,
            merchantId: 0,
            type: TRANSACTION.WITHDRAWAL,
            serviceUsed: service,
          });

          await queryRunner.manager.save(Transaction, newTransaction);

          await this.walletService.removeMoney(
            { email: user.email, amount: dto.amount },
            queryRunner,
          );

          result = await this.monnifyService.initiateTransfers(payload);

          await queryRunner.commitTransaction();
        } catch (error) {
          await queryRunner.rollbackTransaction();
          throw error;
        }
        await this.transactionRepository.update(
          { reference },
          { status: result.status },
        );
      }

      if (service === FLUTTERWAVE) {
        result = await this.flutterwaveService.transfer(payload);

        if (result.status === 'success') {
          await this.walletService.removeMoney(
            { email: user.email, amount: dto.amount },
            queryRunner,
          );
          await queryRunner.manager.update(
            Transaction,
            { reference },
            { status: TRANSACTIONSTATUS.PENDING, merchantId: result.data.id },
          );

          await queryRunner.commitTransaction();
          return {
            message: result.message,
          };
        } else if (result.status === 'error') {
          throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        } else {
          await queryRunner.manager.update(
            Transaction,
            { reference },
            { status: TRANSACTIONSTATUS.FAILED, id: result.data.id },
          );
          await queryRunner.commitTransaction();
          return {
            status: 404,
            message: result.message,
          };
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async getTransactionStatus(
    reference: string | number,
    service: BankServices,
  ) {
    try {
      let result;
      if (service === MONNIFY) {
        result = await this.monnifyService.getTransactionStatus(
          <string>reference,
        );

        return await this.transactionRepository.update(
          { reference: <string>reference },
          {
            status: result.status,
            bankName: result.data.destinationBankName,
            accountName: result.data.destinationAccountName,
            merchantReference: result.data.transactionReference,
          },
        );
      }

      if (service === FLUTTERWAVE) {
        result = await this.flutterwaveService.getTransferStatus(
          <number>reference,
        );

        if (result.status !== 'success') {
          throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        if (result.data.status === 'SUCCESSFUL') {
          await this.transactionRepository.update(
            { merchantId: <number>reference },
            { status: TRANSACTIONSTATUS.COMPLETED },
          );
          return {
            message: result.data.complete_message,
            status: result.data.status,
          };
        }

        if (result.status === 'PENDING') {
          return {
            message: result.data.complete_message,
            status: result.data.status,
          };
        }

        if (result.status === 'FAILED') {
          await this.transactionRepository.update(
            { merchantId: <number>reference },
            { status: TRANSACTIONSTATUS.FAILED },
          );
          return {
            message: result.data.complete_message,
            status: result.data.status,
          };
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async updateTransactionStatus(
    reference: number | string,
    status: TransactionStatus,
    service: BankServices,
  ) {
    try {
      if (service === MONNIFY) {
        return await this.transactionRepository.update(
          { merchantId: <number>reference },
          { status },
        );
      }

      if (service === FLUTTERWAVE) {
        await this.transactionRepository.update(
          { reference: <string>reference },
          { status },
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async getTotalNairaTransactionsBalance() {
    try {
      const { sum } = await this.transactionRepository
        .createQueryBuilder('transaction')
        .select('SUM(transaction.amount)', 'sum')
        .where('transaction.currency = :currency', {
          currency: CURRENCY.NAIRA,
        })
        .getRawOne();

      return {
        totalNairaTransactions: sum,
      };
    } catch (error) {
      throw error;
    }
  }

  async getTotalNairaWithdrawalsBalance() {
    try {
      const { sum } = await this.transactionRepository
        .createQueryBuilder('transaction')
        .select('SUM(transaction.amount)', 'sum')
        .where('transaction.currency = :currency', {
          currency: CURRENCY.NAIRA,
        })
        .andWhere('transaction.type = :type', { type: TRANSACTION.WITHDRAWAL })
        .getRawOne();

      return {
        totalNairaWithdrawals: sum,
      };
    } catch (error) {
      throw error;
    }
  }

  async getTotalNairaDepositsBalance() {
    try {
      const { sum } = await this.transactionRepository
        .createQueryBuilder('transaction')
        .select('SUM(transaction.amount)', 'sum')
        .where('transaction.currency = :currency', {
          currency: CURRENCY.NAIRA,
        })
        .andWhere('transaction.type = :type', { type: TRANSACTION.DEPOSIT })
        .getRawOne();

      return {
        totalNairaDeposits: sum,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllTransactions(type?: TransactionType) {
    try {
      if (type) {
        return await this.transactionRepository.find({ type });
      }
      return await this.transactionRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async getUserTransactions(id: number, type?: TransactionType) {
    try {
      if (type) {
        return await this.transactionRepository.find({ userId: id });
      }
      return await this.transactionRepository.find({ userId: id, type });
    } catch (error) {
      throw error;
    }
  }

  async findOneTransaction(id: number) {
    try {
      return await this.transactionRepository.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  // create callback url/webhooks
  // add server sent events
  //  admin refetch transaction
  // admin retry a transaction
  // admin update transaction details
  // transaction with same amount and bank(similar transactions) with created at 10 minutes ago will not be valid

  /*async getCurrentService() {
    let data;
    data = await this.cacheManager.get<any>(
      ServicesSettings.TRANSACTIONS_SERVICE,
    );

    if (!data) {
      data = await this.settingsService.getSetting(
        ServicesSettings.TRANSACTIONS_SERVICE,
      );
    }

    if (!data) {
      throw new HttpException(
        'Service currently unavailable',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    const status = data.isActive;

    if (!status) {
      throw new HttpException(
        'Service currently unavailable',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
    const service = data.value;

    switch (service) {
      case Services.FLUTTERWAVE:
        this.currentService = this.flutterwaveService;
        break;
      case Services.MONNIFY:
        this.currentService = this.monnifyService;
    }
  }

  async createVirtualAccount(createVirtualAccountDto: CreateVirtualAccountDto) {
    const flutterwaveData: CreateReservedAccountDto = {
      email: createVirtualAccountDto.customerEmail,
      tx_ref: createVirtualAccountDto.accountRecference,
      bvn: createVirtualAccountDto.bvn,
      is_permanent: true,
    };

    const monnifyData = removeKeyAndPropertyFromObject(
      createVirtualAccountDto,
      ['tx_ref'],
    );
    try {
      await this.getCurrentService();

      let result;

      switch (this.currentService) {
        case this.flutterwaveService:
          result = await this.currentService.createReservedAccount(
            flutterwaveData,
          );
          break;
        case this.monnifyService:
          result = await this.currentService.createReservedAccount(monnifyData);
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  async withdraw(withdrawalDto: WithdrawalDto) {
    try {
      await this.monnifyService.initiateTransfers(withdrawalDto);
    } catch (error) {
      throw error;
    }
  }

  /*async completeDeposit(reference: string, user: User) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const transactionStatus = await this.paystackService.verifyTransaction(
        reference,
      );

      if (transactionStatus['data']['status'] === 'success') {
        const email = transactionStatus['data']['customer']['email'];
        const { amount } = transactionStatus['data'];
        const transactionDto = { email, amount };
        const response = await this.walletService.deposit(transactionDto);
        const deposit = new Transaction();
        deposit.amount = amount;
        deposit.balance = response.data.balance;
        deposit.user = user;
        deposit.type = 'deposit';
        deposit.remarks = `Paystack Deposit`;
        await queryRunner.manager.save(deposit);
      }
      await queryRunner.commitTransaction();
      return {
        message: 'Deposit completed successfully',
      };
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();

      throw err;
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }*/
}
