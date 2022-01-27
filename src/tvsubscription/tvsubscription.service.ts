import { Injectable } from '@nestjs/common';
import { CreateTvsubscriptionDto } from './dto/create-tvsubscription.dto';
import { UpdateTvsubscriptionDto } from './dto/update-tvsubscription.dto';

@Injectable()
export class TvsubscriptionService {
  createTvSubscription;
  getAllTvSubscription;
  getTvSubscriptionById;
  getTvSubscrioptionByOwnerId;
  addTvSubscription;
}
