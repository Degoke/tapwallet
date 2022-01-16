import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { WalletModule } from './wallet/wallet.module';
import { AccountModule } from './account/account.module';
import { MobiledataModule } from './mobiledata/mobiledata.module';
import { AirtimeModule } from './airtime/airtime.module';
import { TvsubscriptionModule } from './tvsubscription/tvsubscription.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ElectricitybillModule } from './electricitybill/electricitybill.module';
import { GiftcardsModule } from './giftcards/giftcards.module';
import * as Joi from 'joi';

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
      }),
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
    GiftcardsModule,
  ],
})
export class AppModule {}
