import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { Twilio } from 'twilio';

@Injectable()
export class SmsService {
  sendOtp;
  sendMessage;
  verifyOtp;
}
