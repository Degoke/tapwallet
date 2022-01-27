import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { WalletModule } from './wallet/wallet.module';
import { AccountModule } from './account/account.module';
import { MobiledataModule } from './mobiledata/mobiledata.module';
import { AirtimeModule } from './airtime/airtime.module';
import { TvsubscriptionModule } from './tvsubscription/tvsubscription.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ElectricitybillModule } from './electricitybill/electricitybill.module';
import { TransfersModule } from './transfers/transfers.module';
import { SmsModule } from './sms/sms.module';
import { BankModule } from './bank/bank.module';
import { FlutterwaveModule } from './flutterwave/flutterwave.module';
import { SettingsModule } from './settings/settings.module';
import { AdminModule } from './admin/admin.module';
import { TwillioModule } from './twillio/twillio.module';
import { LogModule } from './log/log.module';
import { HealthModule } from './health/health.module';
import { MonnifyModule } from './monnify/monnify.module';
import * as Joi from 'joi';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB_PREFIX: Joi.string().required(),
        POSTGRES_DB_NAME: Joi.string().required(),
        POSTGRES_DB_PORT: Joi.number().required(),
        POSTGRES_DB_HOST: Joi.string().required(),
        PGADMIN_DEFAULT_EMAIL: Joi.string().required(),
        PGADMIN_DEFAULT_PASSWORD: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        TWILLIO_ACCOUNT_SID: Joi.string().required(),
        TWILLIO_MESSAGING_SERVICE_SID: Joi.string().required(),
        TWILLIO_AUTH_TOKEN: Joi.string().required(),
        TWILLIO_PHONE_NUMBER: Joi.string().required(),
        FLUTTERWAVE_PUBLIC_KEY: Joi.string().required(),
        FLUTTERWAVE_SECRET_KEY: Joi.string().required(),
        FLUTTERWAVE_ENCRYPT_KEY: Joi.string().required(),
        MONNIFY_BASE_URL: Joi.string().required(),
        MONNIFY_SECRET_KEY: Joi.string().required(),
        MONNIFY_APIKEY: Joi.string().required(),
        MONNIFY_CONTRACT_CODE: Joi.string().required(),
        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.string().required(),
      }),
    }),
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: 1200,
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    DatabaseModule,
    WalletModule,
    AccountModule,
    MobiledataModule,
    AirtimeModule,
    TvsubscriptionModule,
    TransactionsModule,
    ElectricitybillModule,
    TransfersModule,
    SmsModule,
    BankModule,
    FlutterwaveModule,
    SettingsModule,
    AdminModule,
    TwillioModule,
    LogModule,
    HealthModule,
    MonnifyModule,
  ],
})
export class AppModule {}
