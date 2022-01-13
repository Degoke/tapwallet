import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { email } = createUserDto;

      const user = this.userRepository.findOne({ email });

      if (user) {
        throw new HttpException('Email Already in use', HttpStatus.CONFLICT);
      }

      const newUser = await this.userRepository.create(createUserDto);

      await this.userRepository.save(newUser);

      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string) {
    try {
      return this.userRepository.findOne(email);
    } catch (error) {
      throw error;
    }
  }

  async findById(userId: number) {
    try {
      return this.userRepository.findOne(userId);
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
