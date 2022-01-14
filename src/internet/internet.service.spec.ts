import { Test, TestingModule } from '@nestjs/testing';
import { InternetService } from './internet.service';

describe('InternetService', () => {
  let service: InternetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternetService],
    }).compile();

    service = module.get<InternetService>(InternetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
