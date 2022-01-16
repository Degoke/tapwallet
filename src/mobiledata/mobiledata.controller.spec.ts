import { Test, TestingModule } from '@nestjs/testing';
import { MobiledataController } from './mobiledata.controller';
import { MobiledataService } from './mobiledata.service';

describe('MobiledataController', () => {
  let controller: MobiledataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobiledataController],
      providers: [MobiledataService],
    }).compile();

    controller = module.get<MobiledataController>(MobiledataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
