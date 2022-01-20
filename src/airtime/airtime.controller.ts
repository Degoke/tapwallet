import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AirtimeService } from './airtime.service';
import { BuyAirtimeDto } from './dto/buy-airtime.dto';
import { CreateAirtimeDto } from './dto/create-airtime.dto';
import { UpdateAirtimeDto } from './dto/update-airtime.dto';
import { ValidateAirtimeDto } from './dto/validate-airtime.dto';

@Controller('airtime')
export class AirtimeController {
  constructor(private readonly airtimeService: AirtimeService) {}
}
