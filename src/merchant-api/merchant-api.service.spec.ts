import { Test, TestingModule } from '@nestjs/testing';
import { MerchantApiService } from './merchant-api.service';

describe('MerchantApiService', () => {
  let service: MerchantApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerchantApiService],
    }).compile();

    service = module.get<MerchantApiService>(MerchantApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
