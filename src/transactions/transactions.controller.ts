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

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Post('deposit')
  deposit(@Body() createTransactionDto: CreateTransactionDto) {
    return this.paystackService.initializeTransaction(createTransactionDto);
  }

  @UseGuards(JwtAuthGaurd)
  @Post('verify_deposit')
  verifyDeposit(
    @Body() verifyTransactionDto: VerifyTransactionDto,
    @Request() req,
  ) {
    const { reference } = verifyTransactionDto;
    return this.transactionsService.completeDeposit(reference, req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}
