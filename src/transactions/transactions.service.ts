import { HttpException, Injectable } from '@nestjs/common';
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

@Injectable()
export class TransactionsService {
  constructor(
    private connection: Connection,
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    private readonly paystackService: PaystackService,
    private readonly walletService: WalletService, // private readonly userService: UserService,
  ) {}

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
