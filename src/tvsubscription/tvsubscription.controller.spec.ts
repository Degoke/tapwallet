import { Test, TestingModule } from '@nestjs/testing';
import { TvsubscriptionController } from './tvsubscription.controller';
import { TvsubscriptionService } from './tvsubscription.service';

describe('TvsubscriptionController', () => {
  let controller: TvsubscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TvsubscriptionController],
      providers: [TvsubscriptionService],
    }).compile();

    controller = module.get<TvsubscriptionController>(TvsubscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
