import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { Setting } from 'src/settings/entities/setting.entity';
import Log from 'src/log/entities/log.entity';
import DatabaseLogger from './database-logger';
import { ReceiveTransfer } from 'src/transfers/entities/receive-transfer.entity';
import { SendTransfer } from 'src/transfers/entities/send-transfer.entity';
import { TransferRequest } from 'src/transfers/entities/transfer-requests.entity';
import { Referral } from 'src/referral/entities/referral.entity';
import { Withdrawal } from 'src/transactions/entities/withdrawal.entity';
import { Customer } from 'src/user/entities/customer.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { AirtimeActivity } from 'src/activities/entities/airtime-activity.entity';
import { ElectricityBillActivity } from 'src/activities/entities/electricity-bill-activity.entity';
import { TvSubscriptionActivity } from 'src/activities/entities/tv-subscription-activity.entity';
import { MobileDataActivity } from 'src/activities/entities/mobiledata-activity.entity';
import { Deposit } from 'src/transactions/entities/deposit.entity';
import { Account } from 'src/account/entities/account.entity';
import { Merchant } from 'src/merchant-api/entities/merchant.entity';
import { PaymentMerchant } from 'src/settings/entities/payment-merchant.entity';
import { Admin } from 'src/admin/entities/admin.entity';
import { SeedingLogEntry } from 'src/seeding/entities/seeding.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        logger: new DatabaseLogger(),
        host: configService.get('POSTGRES_DB_HOST'),
        port: configService.get('POSTGRES_DB_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        ssl: configService.get('NODE_ENV') === 'dev' ? false : true,
        entities: [
          Setting,
          Log,
          Customer,
          Admin,
          Wallet,
          Withdrawal,
          ReceiveTransfer,
          SendTransfer,
          TransferRequest,
          Account,
          Referral,
          AirtimeActivity,
          ElectricityBillActivity,
          TvSubscriptionActivity,
          MobileDataActivity,
          Deposit,
          Merchant,
          PaymentMerchant,
          SeedingLogEntry,
        ],
        migrations: ['dist/migrations/**/*{.ts,.js}'],
        cli: {
          migrationsDir: 'src/migrations',
        },
        synchronize: true,
        migrationsRun: true,

        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
