import { Injectable } from '@nestjs/common';
import { CreateElectricitybillDto } from './dto/create-electricitybill.dto';
import { UpdateElectricitybillDto } from './dto/update-electricitybill.dto';

@Injectable()
export class ElectricitybillService {
  buyElectricityUnits;
  verifyBillStatus;
  getAllElectricityBills;
  getElectricityBillByOwnerId;
}
