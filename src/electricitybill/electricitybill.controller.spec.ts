import { Test, TestingModule } from '@nestjs/testing';
import { ElectricitybillController } from './electricitybill.controller';
import { ElectricitybillService } from './electricitybill.service';

describe('ElectricitybillController', () => {
  let controller: ElectricitybillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectricitybillController],
      providers: [ElectricitybillService],
    }).compile();

    controller = module.get<ElectricitybillController>(
      ElectricitybillController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
