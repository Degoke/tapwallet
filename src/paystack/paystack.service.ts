import { HttpException, Injectable } from '@nestjs/common';
import { CreatePaystackDto } from './dto/create-paystack.dto';
import { UpdatePaystackDto } from './dto/update-paystack.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map, lastValueFrom, catchError, of } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { CreateTransactionDto } from 'src/transactions/dto/create-transaction.dto';
import { CreateTransferRecipientDto } from './dto/create-transfer-recipient.dto';
import { InitializeWithdrawalDto } from './dto/initialize-withdrawal.dto';
import { FinalizeWithdrawalDto } from './dto/finalize-withdrawal.dto';

@Injectable()
export class PaystackService {
  private secretKey: string;
  private publicKey: string;
  private requestHeaders;
  constructor(
    private readonly configService: ConfigService,
    private httpService: HttpService,
  ) {
    this.secretKey = this.configService.get('PAYSTACK_SECRET_KEY');
    this.publicKey = this.configService.get('PAYSTACK_PUBLIC_KEY');
    this.requestHeaders = {
      headers: {
        Authorization: 'Bearer' + ' ' + this.secretKey,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }

  async bankList(): Promise<Observable<AxiosResponse<any>>> {
    const response = this.httpService
      .get('https://api.paystack.co/bank/', this.requestHeaders)
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            error.response.data.message.error,
            error.response.status,
          );
        }),
      );

    return await lastValueFrom(response);
  }

  async initializeTransaction(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Observable<AxiosResponse<any>>> {
    const response = this.httpService
      .post(
        'https://api.paystack.co/transaction/initialize',
        createTransactionDto,
        this.requestHeaders,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          //          throw error;
          throw new HttpException(
            error.response.data.message.error,
            error.response.status,
          );
        }),
      );
    return await lastValueFrom(response);
  }

  async verifyTransaction(
    reference: string,
  ): Promise<Observable<AxiosResponse<any>>> {
    //    return reference;
    const response = this.httpService
      .get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        this.requestHeaders,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          //          throw error;
          throw new HttpException(
            error.response.data.message.error,
            error.response.status,
          );
        }),
      );
    return await lastValueFrom(response);
  }

  async createTransferRecipient(
    createTransferRecipientDto: CreateTransferRecipientDto,
  ) {
    const response = this.httpService
      .post(
        'https://api.paystack.co/transferrecipient',
        createTransferRecipientDto,
        this.requestHeaders,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          //          throw error;
          throw new HttpException(error.message, error.response.status);
        }),
      );
    return await lastValueFrom(response);
  }

  async initializeWithdrawal(
    initializeWithdrawalDto: InitializeWithdrawalDto, // : Promise<Observable<AxiosResponse<any>>>
  ) {
    const response = this.httpService
      .post(
        'https://api.paystack.co/transfer/',
        initializeWithdrawalDto,
        this.requestHeaders,
      )
      .pipe(
        map((res) => res.data),
        catchError((err) => of([])),
      )
      .subscribe(
        (x) => console.log('Observer got a next value: ' + x),
        (err) => console.error('Observer got an error: ' + err),
        () => console.log('Observer got a complete notification'),
        // res => console.log('HTTP response', res),
        // err => console.log('HTTP Error', err),
        // () => console.log('HTTP request completed.')
      );
    // return await lastValueFrom(response);
  }

  async finalizeWithdrawal(finalizeWithdrawalDto: FinalizeWithdrawalDto) {
    const response = this.httpService
      .post(
        'https://api.paystack.co/transfer/finalize_transfer',
        finalizeWithdrawalDto,
        this.requestHeaders,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          //        throw error;
          throw new HttpException(error.message, error.response.status);
        }),
      );
    return await lastValueFrom(response);
  }

  create(createPaystackDto: CreatePaystackDto) {
    return 'This action adds a new paystack';
  }

  findAll() {
    return `This action returns all paystack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paystack`;
  }

  update(id: number, updatePaystackDto: UpdatePaystackDto) {
    return `This action updates a #${id} paystack`;
  }

  remove(id: number) {
    return `This action removes a #${id} paystack`;
  }
}
