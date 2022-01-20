import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGiftcardDto } from './dto/create-giftcard.dto';
import { UpdateGiftcardDto } from './dto/update-giftcard.dto';
import { Giftcard } from './entities/giftcard.entity';

@Injectable()
export class GiftcardsService {
  constructor(
    @InjectRepository(Giftcard)
    private giftCardRepository: Repository<Giftcard>,
  ) {}
  create(createGiftcardDto: CreateGiftcardDto) {
    return 'This action adds a new giftcard';
  }

  findAll() {
    return `This action returns all giftcards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} giftcard`;
  }

  update(id: number, updateGiftcardDto: UpdateGiftcardDto) {
    return `This action updates a #${id} giftcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} giftcard`;
  }
}
