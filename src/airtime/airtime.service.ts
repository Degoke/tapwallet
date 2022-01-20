import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateAirtimeDto } from './dto/create-airtime.dto';
import { UpdateAirtimeDto } from './dto/update-airtime.dto';
import * as Flutterwave from 'flutterwave-node-v3';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map, of } from 'rxjs';
import { BuyAirtimeDto } from './dto/buy-airtime.dto';
import { off } from 'process';

@Injectable()
export class AirtimeService {
  // get status of bill payents
}
