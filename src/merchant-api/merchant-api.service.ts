import { Injectable } from '@nestjs/common';
import { CreateMerchantApiDto } from './dto/create-merchant-api.dto';
import { UpdateMerchantApiDto } from './dto/update-merchant-api.dto';

@Injectable()
export class MerchantApiService {
  create(createMerchantApiDto: CreateMerchantApiDto) {
    return 'This action adds a new merchantApi';
  }

  findAll() {
    return `This action returns all merchantApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchantApi`;
  }

  update(id: number, updateMerchantApiDto: UpdateMerchantApiDto) {
    return `This action updates a #${id} merchantApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchantApi`;
  }
}
