import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElectricitybillService } from './electricitybill.service';
import { CreateElectricitybillDto } from './dto/create-electricitybill.dto';
import { UpdateElectricitybillDto } from './dto/update-electricitybill.dto';

@Controller('electricitybill')
export class ElectricitybillController {
  constructor(private readonly electricitybillService: ElectricitybillService) {}

  @Post()
  create(@Body() createElectricitybillDto: CreateElectricitybillDto) {
    return this.electricitybillService.create(createElectricitybillDto);
  }

  @Get()
  findAll() {
    return this.electricitybillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.electricitybillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElectricitybillDto: UpdateElectricitybillDto) {
    return this.electricitybillService.update(+id, updateElectricitybillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.electricitybillService.remove(+id);
  }
}
