import { Module } from '@nestjs/common';
import { MerchantApiService } from './merchant-api.service';
import { MerchantApiController } from './merchant-api.controller';

@Module({
  controllers: [MerchantApiController],
  providers: [MerchantApiService]
})
export class MerchantApiModule {}
