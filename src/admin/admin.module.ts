import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SettingsModule } from 'src/settings/settings.module';
import { FlutterwaveModule } from 'src/flutterwave/flutterwave.module';
import { UserModule } from 'src/user/user.module';
import { WalletModule } from 'src/wallet/wallet.module';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { BankModule } from 'src/bank/bank.module';

@Module({
  imports: [
    SettingsModule,
    FlutterwaveModule,
    UserModule,
    WalletModule,
    TransactionsModule,
    BankModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
