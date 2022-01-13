import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
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
      const user = await this.userService.findByEmail(email);

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
      const payload = { email: user.email, sub: user.userId };

      const currentUser = await this.userService.findById(user.userId);

      return {
        user: currentUser,
        token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw error;
    }
  }
}
