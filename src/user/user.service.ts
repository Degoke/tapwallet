import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Wallet from 'src/wallet/entities/wallet.entity';
import { WalletService } from 'src/wallet/wallet.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import User from './entities/user.entity';
import { UserInterface } from './interfaces/User.interface';
import { ReturnTypeContainer } from '../common/containers/Container.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly walletService: WalletService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { email } = createUserDto;

      const user = await this.userRepository.findOne({ email });

      if (user) {
        throw new HttpException('Email Already in use', HttpStatus.CONFLICT);
      }

      // make this into a transaction
      const newUser = await this.userRepository.create(createUserDto);

      const newWallet = await this.walletService.create({
        balance: 0.0,
        owner: newUser,
        type: 'NAIRA',
      });

      await this.userRepository.save({ ...newUser, wallet: newWallet });

      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(
    email: string,
  ): Promise<ReturnTypeContainer<UserInterface>> {
    try {
      const user = await this.userRepository.findOne(
        { email },
        { relations: ['wallet'] },
      );
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return {
        message: 'na GOKE DO AM 0',
        data: user,
      };
    } catch (error) {
      throw error;
    }
  }
  async findById(id: number) {
    try {
      return await this.userRepository.findOne(id, { relations: ['wallet'] });
    } catch (error) {
      throw error;
    }
  }

  async find() {
    try {
      return await this.userRepository.find({ relations: ['wallet'] });
    } catch (error) {
      throw error;
    }
  }

  async getByEmail(email) {
    return await this.userRepository.findOne({ email });
  }
}
