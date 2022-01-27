import { Injectable } from '@nestjs/common';
import { CreateMobiledatumDto } from './dto/create-mobiledatum.dto';
import { UpdateMobiledatumDto } from './dto/update-mobiledatum.dto';

@Injectable()
export class MobiledataService {
  buyMobileData;
  verifyMobileDataTransactionStatus;
  addMObileDtataTransaction;
  getAllMobileDataTransactions;
  getMobileDtatTransactionByOwnerId;
}
