import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VtpassService } from './vtpass.service';
import { CreateVtpassDto } from './dto/create-vtpass.dto';
import { UpdateVtpassDto } from './dto/update-vtpass.dto';

@Controller('vtpass')
export class VtpassController {
  constructor(private readonly vtpassService: VtpassService) {}

  @Post()
  create(@Body() createVtpassDto: CreateVtpassDto) {
    return this.vtpassService.create(createVtpassDto);
  }

  @Get()
  findAll() {
    return this.vtpassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vtpassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVtpassDto: UpdateVtpassDto) {
    return this.vtpassService.update(+id, updateVtpassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vtpassService.remove(+id);
  }
}
