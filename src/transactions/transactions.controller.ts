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
import { TRANSACTION } from 'src/common/types/status.type';
import {
  ADMIN_PERMISSION,
  CheckAbilities,
} from 'src/ability/abilities.decorator';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Public()
  @Post('/confirm-withdrawal')
  confirmWithdrawalCallback(@Body() body) {
    return body;
  }

  @CheckAbilities(new ADMIN_PERMISSION())
  @Get('all')
  getAllTransactions() {
    return this.transactionsService.getAllTransactions();
  }

  @Get('all/current-user')
  getCurrentUsersTransactions(@Request() req) {
    return this.transactionsService.getUserTransactions(req.user.id);
  }

  @CheckAbilities(new ADMIN_PERMISSION())
  @Get('all/user/:id')
  getuserTransactionsById(@Param('id') id: number) {
    return this.transactionsService.getUserTransactions(id);
  }

  @Get('/transaction/:id')
  getTransactionById(@Param('id') id: number) {
    return this.transactionsService.findOneTransaction(id);
  }

  @CheckAbilities(new ADMIN_PERMISSION())
  @Get('withdrawals')
  getAllWithdrawals() {
    return this.transactionsService.getAllTransactions(TRANSACTION.WITHDRAWAL);
  }

  @Get('/withdrawals/current-user')
  getCurrentUserWithdrawals(@Request() req) {
    const { id } = req.user;
    return this.transactionsService.getUserTransactions(
      id,
      TRANSACTION.WITHDRAWAL,
    );
  }

  @CheckAbilities(new ADMIN_PERMISSION())
  @Get('/withdrawals/user/:id')
  getUserWithdrawalsById(@Param('id') id: number) {
    return this.transactionsService.getUserTransactions(
      id,
      TRANSACTION.WITHDRAWAL,
    );
  }

  @CheckAbilities(new ADMIN_PERMISSION())
  @Get('deposits')
  getAllDeposits() {
    return this.transactionsService.getAllTransactions(TRANSACTION.DEPOSIT);
  }

  @Get('/deposits/current-user')
  getCurrentUserDeposit(@Request() req) {
    const { id } = req.user;
    return this.transactionsService.getUserTransactions(
      id,
      TRANSACTION.WITHDRAWAL,
    );
  }

  @CheckAbilities(new ADMIN_PERMISSION())
  @Get('/deposits/user/:id')
  getUserDepositsById(@Param('id') id: number) {
    return this.transactionsService.getUserTransactions(
      id,
      TRANSACTION.WITHDRAWAL,
    );
  }
}
