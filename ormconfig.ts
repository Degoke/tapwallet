import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import User from 'src/user/entities/user.entity';
// import Account from 'src/user/entities/account.entity';
// import Wallet from 'src/wallet/entities/wallet.entity';
// import { Transaction } from '../transactions/entities/transaction.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_DB_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: true,
};

module.exports = config;
