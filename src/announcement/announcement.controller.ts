import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  Sse,
  Req,
  MessageEvent,
} from '@nestjs/common';
import { query } from 'express';
import { interval, map, Observable } from 'rxjs';
import { Public } from 'src/common/decorators/jwt-auth-guard.decorator';
import { ANNOUNCEMENT_STATUS } from 'src/common/types/announcement.type';
import { AnnouncementService } from './announcement.service';
import {
  AnnouncementQueryDto,
  CreateAnnouncementDto,
} from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

const { DRAFT, PUBLISHED } = ANNOUNCEMENT_STATUS;

@Controller('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Public()
  @Get()
  getAll(@Query() query: AnnouncementQueryDto) {
    let type;

    if (query) {
      if (query.type === DRAFT) {
        type = DRAFT;
      } else if (query.type === PUBLISHED) {
        type = PUBLISHED;
      } else if (!query.type) {
        type = 'all';
      } else {
        throw new HttpException(
          'Invalid query parameter',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    if (!query) {
      type = 'all';
    }
    return this.announcementService.getAll(type);
  }

  @Post()
  create(@Body() body: CreateAnnouncementDto, @Req() req) {
    const { user } = req.user;
    return this.announcementService.create(body, user.email);
  }

  @Public()
  @Sse('subscribe')
  subscribe(@Query() query) {
    return this.announcementService.subscribe(query.id);
  }

  @Public()
  @Post('emit')
  emit(@Body() body, @Query() query) {
    this.announcementService.emit(query.id, { ...body.data, id: query.id });
    return {
      message: 'done',
    };
  }

  /*@Sse()
  subscribeForUSer() {}

  @Post(':id')
  sendToAll() {}

  @Post()
  sendToUser() {}
  */
}
