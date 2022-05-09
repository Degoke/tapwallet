import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MerchantApiService } from './merchant-api.service';
import { CreateMerchantApiDto } from './dto/create-merchant-api.dto';
import { UpdateMerchantApiDto } from './dto/update-merchant-api.dto';

@Controller('merchant-api')
export class MerchantApiController {
  constructor(private readonly merchantApiService: MerchantApiService) {}

  @Post()
  create(@Body() createMerchantApiDto: CreateMerchantApiDto) {
    return this.merchantApiService.create(createMerchantApiDto);
  }

  @Get()
  findAll() {
    return this.merchantApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchantApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMerchantApiDto: UpdateMerchantApiDto) {
    return this.merchantApiService.update(+id, updateMerchantApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchantApiService.remove(+id);
  }
}
