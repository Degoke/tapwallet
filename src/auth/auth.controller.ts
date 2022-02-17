import {
  Controller,
  Post,
  UseGuards,
  Request,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { get } from 'http';
import { JwtAuthGaurd } from 'src/common/gaurds/jwt-auth.gaurd';
import { LocalAuthGaurd } from 'src/common/gaurds/local-auth.gaurd';
import PermissionGuard from 'src/common/gaurds/permission.gaurd';
import Permission from 'src/common/types/permission.type';
import { AuthService } from './auth.service';
import { SetPinDTO } from './dto/set-pin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  async login(@Request() req) {
    return this.authService.loginUser(req.user);
  }

  @UseGuards(PermissionGuard(Permission.EDIT))
  @Post('pin')
  setPin(@Request() req, @Body() setPinDto: SetPinDTO) {
    const { password, pin } = setPinDto;
    const { email } = req.user;
    return this.authService.createTransactionPin(password, pin, email);
  }
}
