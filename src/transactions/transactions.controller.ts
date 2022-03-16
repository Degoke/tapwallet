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
import { Public } from 'src/common/decorators/jwt-auth-guard.decorator';
import { FWWithdrawalDto } from './dto/withdrawal.dto';
import { BANK_SERVICES } from 'src/common/types/service.type';
import { TransactionStatus } from 'src/common/types/status.type';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Public()
  @Post('/confirm-withdrawal')
  confirmWithdrawalCallback(@Body() body) {
    return body;
  }

  //@CheckAbilities(new CreateTransactionPermission())
  @Post('withdraw')
  initiateWithdrawal(@Body() body: FWWithdrawalDto, @Request() req) {
    return this.transactionsService.initiateWithdrawal(
      body,
      req.user,
      BANK_SERVICES.MONNIFY,
    );
  }

  @Post('update-status/:id')
  updateStatus(
    @Body() body: { status: TransactionStatus },
    @Param('id') id: number,
  ) {
    return this.transactionsService.updateTransactionStatus(
      id,
      body.status,
      BANK_SERVICES.MONNIFY,
    );
  }

  /*@Get('all')
  getAllTransactions() {
    return this.transactionsService.getAllTransactions();
  }

  @CheckAbilities(new ReadTransactionPermission())
  @Get('all/current-user')
  getCurrentUsersTransactions(@Request() req) {
    return this.transactionsService.getUserTransactions(req.user.id);
  }

  @Get('all/user/:id')
  getuserTransactionsById(@Param('id') id: number) {
    return this.transactionsService.getUserTransactions(id);
  }

  @CheckAbilities(new ReadTransactionPermission())
  @Get('/transaction/:id')
  getTransactionById(@Param('id') id: number) {
    return this.transactionsService.findOneTransaction(id);
  }

  @Get('withdrawals')
  getAllWithdrawals() {
    return this.transactionsService.getAllTransactions(TRANSACTION.WITHDRAWAL);
  }

  @CheckAbilities(new ReadTransactionPermission())
  @Get('/withdrawals/current-user')
  getCurrentUserWithdrawals(@Request() req) {
    const { id } = req.user;
    return this.transactionsService.getUserTransactions(
      id,
      TRANSACTION.WITHDRAWAL,
    );
  }

  @Get('/withdrawals/user/:id')
  getUserWithdrawalsById(@Param('id') id: number) {
    return this.transactionsService.getUserTransactions(
      id,
      TRANSACTION.WITHDRAWAL,
    );
  }

  @Get('deposits')
  getAllDeposits() {
    return this.transactionsService.getAllTransactions(TRANSACTION.DEPOSIT);
  }

  @CheckAbilities(new ReadTransactionPermission())
  @Get('/deposits/current-user')
  getCurrentUserDeposit(@Request() req) {
    const { id } = req.user;
    return this.transactionsService.getUserTransactions(
      id,
      TRANSACTION.WITHDRAWAL,
    );
  }

  @Get('/deposits/user/:id')
  getUserDepositsById(@Param('id') id: number) {
    return this.transactionsService.getUserTransactions(
      id,
      TRANSACTION.WITHDRAWAL,
    );
  }

  @Public()
  @Post('confirm-monnify-disbursement')
  confirmMonnifyDisbursement(@Body() body, @Request() req) {
    return;
  }*/
}
