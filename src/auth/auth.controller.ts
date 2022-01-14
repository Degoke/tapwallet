import { Controller, Post, UseGuards, Request } from '@nestjs/common';
//import { LocalAuthGaurd } from 'src/common/gaurds/local-auth.gaurd';
import { LocalAuthGaurd } from '../common/gaurds/local-auth.gaurd';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginUser(req.user);
  }
}
