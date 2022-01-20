import { Module } from '@nestjs/common';
import { AirtimeService } from './airtime.service';
import { AirtimeController } from './airtime.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AirtimeController],
  providers: [AirtimeService],
})
export class AirtimeModule {}
