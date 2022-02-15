import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  create(@Body() options) {
    return this.emailService.sendVerificationCode(options.email);
  }

  @Post('verify')
  verify(@Body() body) {
    return this.emailService.verifyMail(body.code, body.email);
  }

  @Get()
  findAll() {
    return this.emailService.findAll();
  }
}
