import { EntityRepository, Repository } from 'typeorm';
import { Announcement } from '../entities/announcement.entity';

@EntityRepository(Announcement)
export class AnnouncementReository extends Repository<Announcement> {}
