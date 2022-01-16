import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TvsubscriptionService } from './tvsubscription.service';
import { CreateTvsubscriptionDto } from './dto/create-tvsubscription.dto';
import { UpdateTvsubscriptionDto } from './dto/update-tvsubscription.dto';

@Controller('tvsubscription')
export class TvsubscriptionController {
  constructor(private readonly tvsubscriptionService: TvsubscriptionService) {}

  @Post()
  create(@Body() createTvsubscriptionDto: CreateTvsubscriptionDto) {
    return this.tvsubscriptionService.create(createTvsubscriptionDto);
  }

  @Get()
  findAll() {
    return this.tvsubscriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tvsubscriptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTvsubscriptionDto: UpdateTvsubscriptionDto) {
    return this.tvsubscriptionService.update(+id, updateTvsubscriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tvsubscriptionService.remove(+id);
  }
}
