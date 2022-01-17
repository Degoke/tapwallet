import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Wallet from 'src/wallet/entities/wallet.entity';
import { WalletService } from 'src/wallet/wallet.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import User from './entities/user.entity';
import { UserInterface } from './interfaces/User.interface';
import { ReturnTypeContainer } from '../common/containers/Container.entity';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';

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
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      //create user
      const newUser = await this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });

      //create wallet
      const newWallet = await this.walletService.create({
        balance: 0.0,
        owner: newUser,
        type: 'NAIRA',
      });

      //create referral code
      const code = await this.createReferralCode(newUser.firstName);

      await this.userRepository.save({
        ...newUser,
        wallet: newWallet,
        referralCode: code,
      });

      // send email or phone number

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

  async createReferralCode(firstName) {
    try {
      const hash = await crypto.randomBytes(4).toString('hex').substring(0, 3);
      return `${firstName} ${hash}`;
    } catch (error) {
      throw error;
    }
  }
}
