import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PaystackService } from 'src/paystack/paystack.service';
import { VerifyTransactionDto } from './dto/verify-transaction.dto';
import { JwtAuthGaurd } from '../common/gaurds/jwt-auth.gaurd';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly paystackService: PaystackService,
  ) {}
}
