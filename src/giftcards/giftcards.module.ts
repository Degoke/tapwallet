import { Module } from '@nestjs/common';
import { GiftcardsService } from './giftcards.service';
import { GiftcardsController } from './giftcards.controller';

@Module({
  controllers: [GiftcardsController],
  providers: [GiftcardsService]
})
export class GiftcardsModule {}
