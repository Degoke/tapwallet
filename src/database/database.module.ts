import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import User from 'src/user/entities/user.entity';
import Account from 'src/user/entities/account.entity';
import Wallet from 'src/wallet/entities/wallet.entity';
import { Transaction } from '../transactions/entities/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_DB_HOST'),
        port: configService.get('POSTGRES_DB_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [User, Account, Wallet, Transaction],
        migrations: ['migration/*.js'],
        cli: {
          migrationsDir: 'migration',
        },
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
