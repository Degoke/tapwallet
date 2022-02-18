import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { any } from 'joi';
import { async } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userService.getByEmail(email);

      if (user && (await bcrypt.compare(password, user.password))) {
        return user;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(user: any) {
    try {
      const payload = { email: user.email, sub: user.id };

      const currentUser = await this.userService.findById(user.id);

      return {
        user: currentUser,
        token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw error;
    }
  }

  async createTransactionPin(password: string, pin: number, email: string) {
    try {
      const user = await this.validateUser(email, password);

      if (!user) {
        throw new HttpException('invalid password', HttpStatus.BAD_REQUEST);
      }

      await this.userService.setPin(email, pin);

      return {
        message: 'Pin Set successfully',
      };
    } catch (error) {
      throw error;
    }
  }
}
