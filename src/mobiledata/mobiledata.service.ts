import { Injectable } from '@nestjs/common';
import { CreateMobiledatumDto } from './dto/create-mobiledatum.dto';
import { UpdateMobiledatumDto } from './dto/update-mobiledatum.dto';

@Injectable()
export class MobiledataService {
  create(createMobiledatumDto: CreateMobiledatumDto) {
    return 'This action adds a new mobiledatum';
  }

  findAll() {
    return `This action returns all mobiledata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mobiledatum`;
  }

  update(id: number, updateMobiledatumDto: UpdateMobiledatumDto) {
    return `This action updates a #${id} mobiledatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} mobiledatum`;
  }
}
