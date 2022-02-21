import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FlutterwaveService } from 'src/flutterwave/flutterwave.service';
import { MonnifyService } from 'src/monnify/monnify.service';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { ValidateAccountDto } from './dto/validate-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
    private readonly flutterwaveService: FlutterwaveService,
    private readonly monnifyService: MonnifyService,
  ) {}

  async findAllAccounts() {
    try {
      const data = await this.accountRepository.find({ relations: ['owner'] });
      if (!data) {
        throw new HttpException(
          'There are no avilable accounts',
          HttpStatus.NOT_FOUND,
        );
      }
      return data;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAccoutnById(id) {
    try {
      const data = await this.accountRepository.findOne(id);
      if (!data) {
        throw new HttpException(
          'There are no avilable accounts',
          HttpStatus.NOT_FOUND,
        );
      }
      return data;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAccoutnByOwnerId(id: number) {
    try {
      const data = await this.accountRepository.findOne({ ownerId: id });
      if (!data) {
        throw new HttpException(
          'There are no avilable accounts',
          HttpStatus.NOT_FOUND,
        );
      }
      return data;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createAccount(createAccountDto: CreateAccountDto) {
    try {
      const account = this.accountRepository.create(createAccountDto);
      await this.accountRepository.save(account);
      return {
        message: 'Account created successfully',
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteAccount(id) {
    try {
      await this.accountRepository.delete(id);
      return {
        message: 'Account Deleted successfully',
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async validateAccount(
    accountNumber: string,
    bankCode: string,
    userId: number,
  ) {
    try {
      const data = await this.monnifyService.validateAccountNumber({
        accountNumber,
        bankCode,
      });
      const { accountNumber: returnedAccountNumber, accountName } = data.data;
      await this.createAccount({
        accountName,
        accountNumber: returnedAccountNumber,
        bankCode,
        ownerId: userId,
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
