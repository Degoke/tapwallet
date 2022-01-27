import { HttpService } from '@nestjs/axios';
import {
  CACHE_MANAGER,
  HttpException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, lastValueFrom, map } from 'rxjs';
import { Cache } from 'cache-manager';
import { CreateReservedAccountDto } from './dto/create-reserved-account.dto';
import { InitiateTransferDto } from './dto/initiate-transfer.dto';

@Injectable()
export class MonnifyService {
  private authToken;
  private baseUrl;
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly configService: ConfigService,
    private httpService: HttpService,
  ) {
    this.cacheManager
      .get('monnify_token')
      .then((res) => (this.authToken = res));
    this.baseUrl = this.configService.get('MONNIFY_BASE_URL');
  }
  getAllBanks;
  validateAccountWithBvn;
  validateAccountName;
  disburse;
  createVirtualAccount;
  handleWebHook;

  setRequestHeaders(token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  async authenticate() {
    if (this.authToken) {
      return {
        message: 'Token Available',
      };
    }

    const apiKey = this.configService.get('MONNIFY_APIKEY');
    const apiSecret = this.configService.get('MONNIFY_SECRET_KEY');

    const clientIdSecretInBase64 = Buffer.from(
      apiKey + ':' + apiSecret,
    ).toString('base64');

    const headers = {
      headers: {
        Authorization: `Basic ${clientIdSecretInBase64}`,
      },
    };

    const response = this.httpService
      .post(`${this.baseUrl}api/v1/auth/login`, null, headers)
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            {
              status: error.response.status,
              message: error.response.data.responseMessage,
              code: error.response.data.responseCode,
            },
            error.response.status,
          );
        }),
      );

    const result = await lastValueFrom(response);
    await this.cacheManager.set(
      'monnify_token',
      result.requestBody.accessToken,
      { ttl: result.requestBody.expiresIn },
    );
    this.authToken = result.requestBody.accessToken;

    return result;
  }

  async getAllBankCodes() {
    await this.authenticate();

    const headers = this.setRequestHeaders(this.authToken);

    const response = this.httpService
      .get(`${this.baseUrl}api/v1/banks`, headers)
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            {
              status: error.response.status,
              message: error.response.data.responseMessage,
              code: error.response.data.responseCode,
            },
            error.response.status,
          );
        }),
      );

    const result = await lastValueFrom(response);

    return result;
  }

  async validateAccountNumber({ accountNumber, bankCode }) {
    await this.authenticate();

    const headers = this.setRequestHeaders(this.authToken);

    const response = this.httpService
      .get(
        `api/v1/disbursements/account/validate?accountNumber=${accountNumber}&bankCode=${bankCode}`,
        headers,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            {
              status: error.response.status,
              message: error.response.data.responseMessage,
              code: error.response.data.responseCode,
            },
            error.response.statusCode,
          );
        }),
      );

    const result = await lastValueFrom(response);

    return result;
  }

  async createReservedAccount(
    createReservedAccountDto: CreateReservedAccountDto,
  ) {
    await this.authenticate();

    const headers = this.setRequestHeaders(this.authToken);

    const response = this.httpService
      .post(
        `${this.baseUrl}api/v2/bank-transfer/reserved-accounts`,
        createReservedAccountDto,
        headers,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            {
              status: error.response.status,
              message: error.response.data.responseMessage,
              code: error.response.data.responseCode,
            },
            error.response.statusCode,
          );
        }),
      );

    const result = await lastValueFrom(response);

    return result;
  }

  async deleteReservedAccount(reference: string) {
    await this.authenticate();

    const headers = this.setRequestHeaders(this.authToken);

    const response = this.httpService
      .delete(
        `${this.baseUrl}api/v1/bank-transfer/reserved-accounts/reference/${reference}`,
        headers,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            {
              status: error.response.status,
              message: error.response.data.responseMessage,
              code: error.response.data.responseCode,
            },
            error.response.statusCode,
          );
        }),
      );

    const result = await lastValueFrom(response);

    return result;
  }

  async getReservedAccountTransactions(reference) {
    await this.authenticate();

    const headers = this.setRequestHeaders(this.authToken);

    const response = this.httpService
      .get(
        `${this.baseUrl}api/v1/bank-transfer/reserved-accounts/transactions
    ?accountReference=${reference}`,
        headers,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            {
              status: error.response.status,
              message: error.response.data.responseMessage,
              code: error.response.data.responseCode,
            },
            error.response.statusCode,
          );
        }),
      );

    const result = await lastValueFrom(response);

    return result;
  }

  async initiateTransfers(initiateTransferDto: InitiateTransferDto) {
    await this.authenticate();

    const headers = this.setRequestHeaders(this.authToken);

    const response = this.httpService
      .post(
        `${this.baseUrl}api/v2/disbursements/single`,
        initiateTransferDto,
        headers,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            {
              status: error.response.status,
              message: error.response.data.responseMessage,
              code: error.response.data.responseCode,
            },
            error.response.statusCode,
          );
        }),
      );

    const result = await lastValueFrom(response);

    return result;
  }

  async getWalletBalance(accountNumber: string) {
    await this.authenticate();

    const headers = this.setRequestHeaders(this.authToken);

    const response = this.httpService
      .get(
        `${this.baseUrl}api/v2/disbursements/wallet-balance?accountNumber=${accountNumber}`,
        headers,
      )
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            {
              status: error.response.status,
              message: error.response.data.responseMessage,
              code: error.response.data.responseCode,
            },
            error.response.statusCode,
          );
        }),
      );

    const result = await lastValueFrom(response);

    return result;
  }

  async listAllTransfers() {
    await this.authenticate();

    const headers = this.setRequestHeaders(this.authToken);

    const response = this.httpService
      .get(`${this.baseUrl}api/v2/disbursements/single/transactions`, headers)
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          throw new HttpException(
            {
              status: error.response.status,
              message: error.response.data.responseMessage,
              code: error.response.data.responseCode,
            },
            error.response.statusCode,
          );
        }),
      );

    const result = await lastValueFrom(response);

    return result;
  }
}
