import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { FlutterwaveModule } from 'src/flutterwave/flutterwave.module';
import { MonnifyModule } from 'src/monnify/monnify.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    FlutterwaveModule,
    MonnifyModule,
  ],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
