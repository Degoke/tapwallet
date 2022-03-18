import {
  AnnouncementStatus,
  ANNOUNCEMENT_STATUS,
} from 'src/common/types/announcement.type';
import { EntityContainer } from 'src/common/types/entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Announcement extends EntityContainer {
  @Column()
  public title: string;

  @Column()
  public subject: string;

  @Column({ default: ANNOUNCEMENT_STATUS.DRAFT })
  public status: AnnouncementStatus;

  @Column()
  public createdBy: string;

  @Column({ nullable: true })
  public publishedBy: string;
}
