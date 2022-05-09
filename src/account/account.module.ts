import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlutterwaveModule } from 'src/flutterwave/flutterwave.module';
import { MonnifyModule } from 'src/monnify/monnify.module';
import { UserModule } from 'src/user/user.module';
import { AccountRepository } from './repositories/account.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountRepository]),
    FlutterwaveModule,
    MonnifyModule,
    UserModule,
  ],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
