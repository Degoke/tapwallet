import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletService } from 'src/wallet/wallet.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import User from './entities/user.entity';
import { UserInterface } from './interfaces/User.interface';

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

  async findByEmail(email: string): Promise<UserInterface> {
    try {
      return await this.userRepository.findOne(
        { email },
        { relations: ['wallet'] },
      );
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
      return await this.userRepository.findOne({ relations: ['wallet'] });
    } catch (error) {
      throw error;
    }
  }
}
