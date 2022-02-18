import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import User from 'src/user/entities/user.entity';
import Wallet from 'src/wallet/entities/wallet.entity';
import { Transaction } from '../transactions/entities/transaction.entity';
import { Transfer } from '../transfers/entities/transfer.entity';
import { Setting } from 'src/settings/entities/setting.entity';
import { Account } from 'src/account/entities/account.entity';
import Log from 'src/log/entities/log.entity';
import DatabaseLogger from './database-logger';
import { Airtime } from 'src/airtime/entities/airtime.entity';
import { Email } from 'src/email/entities/email.entity';
import { Tvsubscription } from 'src/tvsubscription/entities/tvsubscription.entity';
import { Mobiledatum } from 'src/mobiledata/entities/mobiledatum.entity';
import { Electricitybill } from 'src/electricitybill/entities/electricitybill.entity';

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
          User,
          Account,
          Wallet,
          Transaction,
          Setting,
          Log,
          Airtime,
          Transfer,
          Email,
          Tvsubscription,
          Mobiledatum,
          Electricitybill,
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
