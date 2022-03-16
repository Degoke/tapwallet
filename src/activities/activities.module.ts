import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirtimeActivityRepository } from './repositories/airtime-activity.repository';
import { ElectricityBillActivityRepository } from './repositories/electricity-bill-activity.repository';
import { MobileDataActivityRepository } from './repositories/mobile-data-activity.repository';
import { TvSubscriptionActivityRepository } from './repositories/tv-subscription-activity.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AirtimeActivityRepository,
      ElectricityBillActivityRepository,
      MobileDataActivityRepository,
      TvSubscriptionActivityRepository,
    ]),
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
