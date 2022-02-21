import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  Request,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interfaces/User.interface';
import { JwtAuthGaurd } from 'src/common/gaurds/jwt-auth.gaurd';
import { VerifyEmailDTO } from './dto/verify-email.dto';
import PermissionGuard from 'src/common/gaurds/permission.gaurd';
import Permission from 'src/common/types/permission.type';
import { AddBankAccountDTO } from '../account/dto/add-bank-accoiunt.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGaurd)
  @Get('current')
  getCurrentUser(@Request() req) {
    return this.userService.findById(req.user.id);
  }

  @Post('verifyemail')
  verifyEmail(@Body() verifyEmailDto: VerifyEmailDTO) {
    const { email, code } = verifyEmailDto;
    return this.userService.verifyEmail(code, email);
  }

  @UseGuards(PermissionGuard(Permission.EDIT))
  @Post()
  initiatePhoneVerification(@Body() body) {
    const { phoneNumber } = body;
    return this.userService.initiatePhoneNumberVerification(phoneNumber);
  }

  @UseGuards(PermissionGuard(Permission.EDIT))
  @Post()
  verifyPhoneOtp(@Request() req, @Body() body) {
    const { id } = req;
    const { phoneNumber, verificationCode } = body;

    return this.userService.verifyPhoneNumberOtp(
      phoneNumber,
      verificationCode,
      id,
    );
  }

  // @UseGuards(JwtAuthGaurd)
  @Get()
  getUser() {
    return this.userService.find();
  }

  @Get(':email')
  getUserByEmail(@Param('email') email) {
    return this.userService.findByEmail(email);
  }
}
