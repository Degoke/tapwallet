import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ElectricitybillService } from './electricitybill.service';
import { CreateElectricitybillDto } from './dto/create-electricitybill.dto';
import { UpdateElectricitybillDto } from './dto/update-electricitybill.dto';

@Controller('electricitybill')
export class ElectricitybillController {
  constructor(
    private readonly electricitybillService: ElectricitybillService,
  ) {}
}
