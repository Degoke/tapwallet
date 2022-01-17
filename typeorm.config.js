/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
  type: 'postgres',
  database: 'db_tapmoney',
  port: 5432,
  username: 'user',
  password: 'secr3t',
  host: 'postgres',
  synchronize: false,
  migrationsRun: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/**/*{.ts,.js}'],
  cli: { migrationsDir: 'src/migrations' },
};
