import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
//import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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
}
