import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { CreateReferralDto } from './dto/create-referral.dto';
import { UpdateReferralDto } from './dto/update-referral.dto';
import { Referral } from './entities/referral.entity';

@Injectable()
export class ReferralService {
  constructor(
    @InjectRepository(Referral)
    private referralRepository: Repository<Referral>,
  ) {}

  async createReferral(
    createReferralDto: CreateReferralDto,
    queryRunner: QueryRunner,
  ) {
    try {
      const newReferral = await queryRunner.manager.create(
        Referral,
        createReferralDto,
      );

      await queryRunner.manager.save(Referral, newReferral);
    } catch (error) {
      throw error;
    }
  }

  create(createReferralDto: CreateReferralDto) {
    return 'This action adds a new referral';
  }

  findAll() {
    return `This action returns all referral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} referral`;
  }

  update(id: number, updateReferralDto: UpdateReferralDto) {
    return `This action updates a #${id} referral`;
  }

  remove(id: number) {
    return `This action removes a #${id} referral`;
  }
}
