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
import { AbilitiesGuard } from 'src/ability/abilities.guard';
import {
  CheckAbilities,
  EDIT_PERMISSION,
  RECEIVE_PERMISSION,
  SEND_USER_PERMSSION,
} from 'src/ability/abilities.decorator';
import { UserPermission } from 'src/common/types/user-permissions.interface';
import User from './entities/user.entity';
import { Public } from 'src/common/decorators/jwt-auth-guard.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
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

  @CheckAbilities(new EDIT_PERMISSION())
  @Post()
  initiatePhoneVerification(@Body() body) {
    const { phoneNumber } = body;
    return this.userService.initiatePhoneNumberVerification(phoneNumber);
  }

  @CheckAbilities(new EDIT_PERMISSION())
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

  @Public()
  @Get()
  getUser() {
    return this.userService.find();
  }

  @Get(':email')
  @CheckAbilities(new RECEIVE_PERMISSION())
  getUserByEmail(@Param('email') email) {
    return this.userService.findByEmail(email);
  }
}
