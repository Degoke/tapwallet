import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BankService } from './bank.service';
import { VerifyAccountNumberDto } from './dto/verify-account-number.dto';
import { VerifyBvnDto } from './dto/verify-bvn.dto';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}
}
