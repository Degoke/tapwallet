import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementController } from './announcement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementReository } from './repositories/announcement.repository';
import EventEmitter from 'events';

@Module({
  imports: [TypeOrmModule.forFeature([AnnouncementReository])],
  controllers: [AnnouncementController],
  providers: [AnnouncementService],
})
export class AnnouncementModule {}
