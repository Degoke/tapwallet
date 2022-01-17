import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import User from 'src/user/entities/user.entity';
import Account from 'src/user/entities/account.entity';
import Wallet from 'src/wallet/entities/wallet.entity';
import { Transaction } from '../transactions/entities/transaction.entity';

export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_DB_HOST,
  port: parseInt(<string>process.env.POSTGRES_DB_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User, Account, Wallet, Transaction],
  migrations: ['src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: true,
};
