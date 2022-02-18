import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Transaction } from './entities/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PaystackModule } from '../paystack/paystack.module';
import Wallet from 'src/wallet/entities/wallet.entity';
import { WalletModule } from 'src/wallet/wallet.module';
import { MonnifyModule } from 'src/monnify/monnify.module';
import { FlutterwaveModule } from 'src/flutterwave/flutterwave.module';
import { SettingsModule } from 'src/settings/settings.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction]),
    HttpModule,
    PaystackModule,
    WalletModule,
    FlutterwaveModule,
    MonnifyModule,
    SettingsModule,
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
