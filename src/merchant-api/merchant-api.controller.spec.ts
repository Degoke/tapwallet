import { Test, TestingModule } from '@nestjs/testing';
import { MerchantApiController } from './merchant-api.controller';
import { MerchantApiService } from './merchant-api.service';

describe('MerchantApiController', () => {
  let controller: MerchantApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchantApiController],
      providers: [MerchantApiService],
    }).compile();

    controller = module.get<MerchantApiController>(MerchantApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
