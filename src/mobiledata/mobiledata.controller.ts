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

  @Post()
  create(@Body() createMobiledatumDto: CreateMobiledatumDto) {
    return this.mobiledataService.create(createMobiledatumDto);
  }

  @Get()
  findAll() {
    return this.mobiledataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mobiledataService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMobiledatumDto: UpdateMobiledatumDto,
  ) {
    return this.mobiledataService.update(+id, updateMobiledatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mobiledataService.remove(+id);
  }
}
