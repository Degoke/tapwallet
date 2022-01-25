import { CreateVtpassDto } from './dto/create-vtpass.dto';
import { UpdateVtpassDto } from './dto/update-vtpass.dto';
import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map, lastValueFrom, catchError, of } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { BuyAirtimeDto } from './dto/buy-airtime.dto';

@Injectable()
export class VtpassService {
  private secretKey: string;
  private publicKey: string;
  private requestHeaders;
  constructor(
    private readonly configService: ConfigService,
    private httpService: HttpService,
  ) {
    this.secretKey = this.configService.get('VTPASS_SECRET_KEY');
    this.publicKey = this.configService.get('VTPASS_PUBLIC_KEY');
    this.requestHeaders = {
      headers: {
        Authorization: 'Bearer' + ' ' + this.secretKey,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }

  async buyAirtime(
    createTransactionDto: BuyAirtimeDto,
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

  create(createVtpassDto: CreateVtpassDto) {
    return 'This action adds a new vtpass';
  }

  findAll() {
    return `This action returns all vtpass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vtpass`;
  }

  update(id: number, updateVtpassDto: UpdateVtpassDto) {
    return `This action updates a #${id} vtpass`;
  }

  remove(id: number) {
    return `This action removes a #${id} vtpass`;
  }
}
