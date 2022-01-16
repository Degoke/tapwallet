import { Module } from '@nestjs/common';
import { TvsubscriptionService } from './tvsubscription.service';
import { TvsubscriptionController } from './tvsubscription.controller';

@Module({
  controllers: [TvsubscriptionController],
  providers: [TvsubscriptionService],
})
export class TvsubscriptionModule {}
