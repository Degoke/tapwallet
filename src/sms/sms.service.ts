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
  private twilioClient: Twilio;

  constructor(
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {
    const accountSid = configService.get('TWILLIO_ACCOUNT_SID');
    const authToken = configService.get('TWILLIO_AUTH_TOKEN');

    this.twilioClient = new Twilio(accountSid, authToken);
  }

  async initiatePhoneNumberVerification(phoneNumber: string) {
    try {
      const serviceSid = this.configService.get<string>(
        'TWILLIO_MESSAGING_SERVICE_SID',
      );

      return await this.twilioClient.verify
        .services(serviceSid)
        .verifications.create({ to: phoneNumber, channel: 'sms' });
    } catch (err) {
      throw err;
    }
  }

  async confirmPhoneNumber(
    userId: number,
    phoneNumber: string,
    verificationCode: string,
  ) {
    try {
      const serviceSid = this.configService.get<string>(
        'TWILLIO_MESSAGING_SERVICE_SID',
      );

      const result = await this.twilioClient.verify
        .services(serviceSid)
        .verificationChecks.create({ to: '+2349018084477', code: '986673' });

      if (!result.valid || result.status !== 'approved') {
        throw new BadRequestException('Invalid code');
      }

      await this.userService.markPhonenumberAsConfirmed(userId);
    } catch (error) {
      throw error;
    }
  }

  async sendMessage(to: string, body: string) {
    const phoneNumber = this.configService.get<string>('TWILLIO_PHONE_NUMBER');
    try {
      await this.twilioClient.messages.create({
        to,
        from: '+2349082290318',
        body: 'Hey baby',
      });
    } catch (error) {
      throw error;
    }
  }
}
