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
import { ConfirmPhoneNumberDto } from './dto/confirm-phone-number.dto';
import { JwtAuthGaurd } from 'src/common/gaurds/jwt-auth.gaurd';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @UseGuards(JwtAuthGaurd)
  @Get('initiate-phone-number-verification')
  async initiatePhoneNumberVerification(@Req() req) {
    if (req.user.isPhoneNumberVerified) {
      throw new BadRequestException('Phone number already verified');
    }
    return this.smsService.initiatePhoneNumberVerification(
      req.user.phoneNumber,
    );
  }

  @UseGuards(JwtAuthGaurd)
  @Post('confirm-phone-number')
  async confirmPhonenumber(
    @Req() req,
    @Body() confirmPhoneNumberDto: ConfirmPhoneNumberDto,
  ) {
    const { id, phoneNumber } = req.user;
    const { code } = confirmPhoneNumberDto;
    return this.smsService.confirmPhoneNumber(id, phoneNumber, code);
  }
}
