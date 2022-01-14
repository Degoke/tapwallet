import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import Wallet from './entities/wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet) private walletRepository: Repository<Wallet>,
  ) {}
  async create(createWalletDto: CreateWalletDto) {
    try {
      const newWallet = await this.walletRepository.create(createWalletDto);

      await this.walletRepository.save(newWallet);

      return newWallet;
    } catch (error) {
      throw error;
    }
  }

  async find() {
    return await this.walletRepository.find({ relations: ['owner'] });
  }

  async findById(id: number) {
    return await this.walletRepository.findOne(id);
  }
}
