import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MobiledataService } from './mobiledata.service';
import { CreateMobiledatumDto } from './dto/create-mobiledatum.dto';
import { UpdateMobiledatumDto } from './dto/update-mobiledatum.dto';

@Controller('mobiledata')
export class MobiledataController {
  constructor(private readonly mobiledataService: MobiledataService) {}
}
