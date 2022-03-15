import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { ACCOUNT_TYPES } from 'src/common/types/account.type';
import { CURRENCY } from 'src/common/types/currency.type';
import { BankServices, BANK_SERVICES } from 'src/common/types/service.type';
import { FlutterwaveService } from 'src/flutterwave/flutterwave.service';
import { KycService } from 'src/kyc/kyc.service';
import { MonnifyService } from 'src/monnify/monnify.service';
import { getTransactionReference } from 'src/utils/random-generators';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { ValidateAccountDto } from './dto/validate-account.dto';
import { Account } from './entities/account.entity';

const { MONNIFY, FLUTTERWAVE } = BANK_SERVICES;

@Injectable()
export class AccountService {
  private currentBankService: BankServices;
  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
    private readonly flutterwaveService: FlutterwaveService,
    private readonly monnifyService: MonnifyService,
    private readonly kycService: KycService,
    private readonly configService: ConfigService,
  ) {
    this.currentBankService = MONNIFY;
  }

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

  async initiateAccountCreation(
    accountNumber: string,
    bankCode: string,
    userId: number,
  ) {
    try {
      const bvn = await this.kycService.findBVNByUserId;
      switch (this.currentBankService) {
        case MONNIFY:
          const result = await this.monnifyService.validateAccountBvnMatch({
            accountNumber,
            bankCode,
            bvn,
          });
          const {
            accountNumber: returnedAccountNumber,
            accountName,
            matchStatus,
          } = result.data;

          if (matchStatus !== 'FULL_MATCH') {
            throw new HttpException(
              'Bvn does not match account',
              HttpStatus.BAD_REQUEST,
            );
          }
          return await this.createAccount({
            accountName,
            accountNumber: returnedAccountNumber,
            bankCode,
            ownerId: userId,
            accountType: ACCOUNT_TYPES.BANK_ACCOUNT,
            bankService: BANK_SERVICES.MONNIFY,
            currency: CURRENCY.NAIRA,
          });
      }
    } catch (error) {
      throw error;
    }
  }

  async validateAccountName() {
    try {
      switch (this.currentBankService) {
        case MONNIFY:
      }
    } catch (error) {
      throw error;
    }
  }

  async verifyBvn(accountNumber: string, bankCode: string) {
    try {
      switch (this.currentBankService) {
        case MONNIFY:
          const result = await this.monnifyService.validateAccountNumber({
            accountNumber,
            bankCode,
          });
          return result.data.accountName;
      }
    } catch (error) {
      throw error;
    }
  }

  async createVirtualAccount(userId) {
    const kyc = await this.kycService.findByUserId(userId);
    const bvn = await this.kycService.findBVNByUserId(userId);
    const reference = await getTransactionReference();
    const contractCode = await this.configService.get('MONNIFY_CONTRACT_CODE');

    const payload = {
      accountReference: reference,
      accountName: `TapMoni-${kyc.bvnName}`,
      currencyCode: CURRENCY.NAIRA,
      contractCode,
      customerEmail: kyc.user.email,
      bvn: bvn.bvn,
      customerName: kyc.bvnName,
      getAllAvailableBanks: true,
    };
    try {
      switch (this.currentBankService) {
        case MONNIFY:
          const result = await this.monnifyService.createReservedAccount(
            payload,
          );
          const { accounts, accountName, currencyCode } = result.data;

          accounts.forEach(async (account) => {
            const { bankCode, bankName, accountNumber } = account;
            await this.createAccount({
              accountName,
              accountNumber,
              bankCode,
              ownerId: userId,
              accountType: ACCOUNT_TYPES.VIRTUAL_ACCOUNT,
              bankService: BANK_SERVICES.MONNIFY,
              currency: CURRENCY.NAIRA,
            });
          });
      }
    } catch (error) {
      throw error;
    }
  }
}
