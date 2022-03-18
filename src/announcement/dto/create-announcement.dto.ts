import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AnnouncementStatus } from 'src/common/types/announcement.type';

export class CreateAnnouncementDto {
  @IsNotEmpty()
  @IsString()
  public title: string;

  @IsNotEmpty()
  @IsString()
  public subject: string;
}

export class AnnouncementQueryDto {
  @IsOptional()
  @IsString()
  type: AnnouncementStatus;
}
