import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entities/user.entity';
import Account from './entities/account.entity';
import Wallet from 'src/wallet/entities/wallet.entity';
import { WalletService } from 'src/wallet/wallet.service';
import { WalletModule } from 'src/wallet/wallet.module';
import { TransfersModule } from '../transfers/transfers.module';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { SmsModule } from 'src/sms/sms.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    WalletModule,
    TransactionsModule,
    SmsModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
