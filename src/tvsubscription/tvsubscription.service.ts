import { Injectable } from '@nestjs/common';
import { CreateTvsubscriptionDto } from './dto/create-tvsubscription.dto';
import { UpdateTvsubscriptionDto } from './dto/update-tvsubscription.dto';

@Injectable()
export class TvsubscriptionService {
  create(createTvsubscriptionDto: CreateTvsubscriptionDto) {
    return 'This action adds a new tvsubscription';
  }

  findAll() {
    return `This action returns all tvsubscription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tvsubscription`;
  }

  update(id: number, updateTvsubscriptionDto: UpdateTvsubscriptionDto) {
    return `This action updates a #${id} tvsubscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} tvsubscription`;
  }
}
