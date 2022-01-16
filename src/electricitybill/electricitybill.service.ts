import { Injectable } from '@nestjs/common';
import { CreateElectricitybillDto } from './dto/create-electricitybill.dto';
import { UpdateElectricitybillDto } from './dto/update-electricitybill.dto';

@Injectable()
export class ElectricitybillService {
  create(createElectricitybillDto: CreateElectricitybillDto) {
    return 'This action adds a new electricitybill';
  }

  findAll() {
    return `This action returns all electricitybill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} electricitybill`;
  }

  update(id: number, updateElectricitybillDto: UpdateElectricitybillDto) {
    return `This action updates a #${id} electricitybill`;
  }

  remove(id: number) {
    return `This action removes a #${id} electricitybill`;
  }
}
