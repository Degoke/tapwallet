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
import { JwtAuthGaurd } from 'src/common/gaurds/jwt-auth.gaurd';
import { VerifyEmailDTO } from './dto/verify-email.dto';
import { AddBankAccountDTO } from '../account/dto/add-bank-accoiunt.dto';
import { AbilitiesGuard } from 'src/ability/abilities.guard';
import {
  CheckAbilities,
  EditUserPermission,
  ReadUserPermission,
  ReadWithdrawalPermission,
} from 'src/ability/abilities.decorator';
import { Public } from 'src/common/decorators/jwt-auth-guard.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('signup')
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createCustomer(createUserDto);
    return {
      user,
    };
  }

  @CheckAbilities(new ReadUserPermission())
  @Get('current')
  getCurrentUser(@Request() req) {
    return {
      user: req.user.user,
      role: req.user.role,
    };
  }

  //  @UseGuards(JwtAuthGaurd)
  @Public()
  @Get()
  getUser() {
    return this.userService.find();
  }

  @Get(':email')
  @UseGuards(JwtAuthGaurd)
  getUserByEmail(@Param('email') email) {
    return this.userService.findByEmail(email);
  }

  @Get('byId/:id')
  @Public()
  getUserById(@Param('id') id) {
    return this.userService.findById(id);
  }

  @Public()
  @Get('kyc/pending')
  getPendingKyc() {
    return this.userService.findUnapprovedKyc();
  }

  @Public()
  @Patch('kyc/approve')
  approvekyc(@Param('id') id) {
    return this.userService.approveKyc(id);
  }

  @Public()
  @Post('verifyemail')
  async verifyEmail(@Body() verifyEmailDto: VerifyEmailDTO) {
    const { email, code } = verifyEmailDto;
    await this.userService.verifyEmail(code, email);
    return {
      message: 'Email verification Success',
    };
  }
  /*
  @CheckAbilities(new EditUserPermission())
  @Post()
  initiatePhoneVerification(@Body() body) {
    const { phoneNumber } = body;
    return this.userService.initiatePhoneNumberVerification(phoneNumber);
  }

  @CheckAbilities(new EditUserPermission())
  @Post()
  verifyPhoneOtp(@Request() req, @Body() body) {
    const { id } = req;
    const { phoneNumber, verificationCode } = body;

    return this.userService.verifyPhoneNumberOtp(
      phoneNumber,
      verificationCode,
      id,
    );
  }*/

  // @UseGuards(JwtAuthGaurd)
  /*@Get()
  getUser() {
    return this.userService.find();
  }

  @Get(':email')
  //  @UseGuards(AbilitiesGuard)
  //  @UseGuards(JwtAuthGaurd)
  //@CheckAbilities(new SEND_USER_PERMSSION())
  getUserByEmail(@Param('email') email) {
    return this.userService.findByEmail(email);
  }*/
}
