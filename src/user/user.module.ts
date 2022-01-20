import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { WalletModule } from 'src/wallet/wallet.module';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { SmsModule } from 'src/sms/sms.module';
import { Account } from 'src/account/entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Account]),
    WalletModule,
    TransactionsModule,
    forwardRef(() => SmsModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
