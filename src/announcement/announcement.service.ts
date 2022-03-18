import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { fromEvent } from 'rxjs';
import {
  AnnouncementStatus,
  ANNOUNCEMENT_STATUS,
} from 'src/common/types/announcement.type';
import { EventEmitter } from 'events';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { AnnouncementReository } from './repositories/announcement.repository';

const { DRAFT, PUBLISHED } = ANNOUNCEMENT_STATUS;

@Injectable()
export class AnnouncementService {
  private readonly eventEmitter: EventEmitter;
  constructor(
    @InjectRepository(AnnouncementReository)
    private announcementRepository: AnnouncementReository,
  ) {
    this.eventEmitter = new EventEmitter();
  }

  async getAll(type: AnnouncementStatus | 'all') {
    try {
      let result;
      if (type === 'all') {
        result = await this.announcementRepository.find();
        return {
          message: 'Success',
          data: {
            announcements: result,
          },
        };
      }

      result = await this.announcementRepository.find({
        where: {
          status: type,
        },
      });
      return {
        message: 'Success',
        data: {
          announcements: result,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async create(payload: CreateAnnouncementDto, email) {
    try {
      const newAnnouncement = await this.announcementRepository.create({
        ...payload,
        createdBy: email,
      });

      const savedAnnouncement = await this.announcementRepository.save(
        newAnnouncement,
      );

      return {
        message: 'Announcement created successfully',
        data: {
          announcement: savedAnnouncement,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  subscribe(email: string) {
    return fromEvent(this.eventEmitter, email);
  }

  async emit(email, data) {
    this.eventEmitter.emit(email, { data });
  }
}
