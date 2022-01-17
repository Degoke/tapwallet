import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { SmsService } from './sms.service';
import { CreateSmDto } from './dto/create-sm.dto';
import { UpdateSmDto } from './dto/update-sm.dto';
import { JwtAuthGaurd } from 'src/common/gaurds/jwt-auth.gaurd';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @UseGuards(JwtAuthGaurd)
  @Post('initiate-phone-number-verification')
  async initiatePhoneNumberVerification(@Req() req) {
    if (req.user.isPhoneNumberVerified) {
      throw new BadRequestException('Phone number already verified');
    }
    await this.smsService.initiatePhoneNumberVerification(req.user.phoneNumber);
  }
}
