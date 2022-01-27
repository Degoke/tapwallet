import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TvsubscriptionService } from './tvsubscription.service';
import { CreateTvsubscriptionDto } from './dto/create-tvsubscription.dto';
import { UpdateTvsubscriptionDto } from './dto/update-tvsubscription.dto';

@Controller('tvsubscription')
export class TvsubscriptionController {
  constructor(private readonly tvsubscriptionService: TvsubscriptionService) {}
}
