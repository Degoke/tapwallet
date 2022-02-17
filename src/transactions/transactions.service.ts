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
import { Services } from 'src/common/types/service.type';
import { ServicesSettings } from 'src/common/types/settings.type';
import { Cache } from 'cache-manager';
import { SettingsService } from 'src/settings/settings.service';
import { CreateVirtualAccountDto } from './dto/create-virtual-account.dto';
import { CreateReservedAccountDto } from 'src/flutterwave/dto/create-reserved-account.dto';
import { WithdrawalDto } from './dto/withdrawal.dto';
import { InitiateWithdrawalDto } from 'src/flutterwave/dto/initiate-withdrawal.dto';

@Injectable()
export class TransactionsService {
  private currentService: FlutterwaveService | MonnifyService;
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private connection: Connection,
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    private readonly paystackService: PaystackService,
    private readonly walletService: WalletService,
    private readonly flutterwaveService: FlutterwaveService,
    private readonly monnifyService: MonnifyService,
    private readonly settingsService: SettingsService,
  ) {}

  async getCurrentService() {
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
