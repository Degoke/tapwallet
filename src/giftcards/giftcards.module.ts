import { Module } from '@nestjs/common';
import { GiftcardsService } from './giftcards.service';
import { GiftcardsController } from './giftcards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Giftcard } from './entities/giftcard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Giftcard])],
  controllers: [GiftcardsController],
  providers: [GiftcardsService],
})
export class GiftcardsModule {}
