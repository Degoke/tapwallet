import { Module } from '@nestjs/common';
import { ElectricitybillService } from './electricitybill.service';
import { ElectricitybillController } from './electricitybill.controller';

@Module({
  controllers: [ElectricitybillController],
  providers: [ElectricitybillService],
})
export class ElectricitybillModule {}
