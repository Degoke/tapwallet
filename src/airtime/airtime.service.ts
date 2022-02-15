import { BuyAirtimeDto } from './dto/buy-airtime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airtime } from './entities/airtime.entity';
import { Services, ServicesType } from 'src/common/types/service.type';
import { FlutterwaveService } from 'src/flutterwave/flutterwave.service';
import { BillCategories } from 'src/common/types/bill-categories.type';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getTransactionReference } from 'src/utils/random-generators';
import { TransactionStatus } from 'src/common/types/status.type';
import { WalletService } from 'src/wallet/wallet.service';

@Injectable()
export class AirtimeService {
  constructor(
    @InjectRepository(Airtime) private airtimeRepository: Repository<Airtime>,
    private readonly flutterwaveService: FlutterwaveService,
    private readonly walletService: WalletService,
  ) {}

  async buyAirtime(buyAirtimeDto: BuyAirtimeDto, service: ServicesType, user) {
    const wallet = await this.walletService.getWalletByOwnerId(user.id);
    if (wallet.balance < parseInt(buyAirtimeDto.amount)) {
      throw new HttpException(
        'Not enough funds in your wallet',
        HttpStatus.BAD_REQUEST,
      );
    }
    let result;
    const reference = await getTransactionReference();
    switch (service) {
      case Services.FLUTTERWAVE:
        const payload = {
          ...buyAirtimeDto,
          reference,
        };
        const response = await this.flutterwaveService.createBill(payload);
        if (response.status === 'success') {
          const payload = {
            customer: response.data.phoneNumber,
            amount: response.data.amount,
            ownerId: user.id,
            merchantReference: response.data.tx_ref,
            tapmoneyReference: reference,
            service: Services.FLUTTERWAVE,
            status: TransactionStatus.PENDING,
            details: response.data,
          };
          const newData = await this.airtimeRepository.create(payload);
          await this.airtimeRepository.save(newData);
          return newData;
        } else {
          result = response;
        }
        break;
    }
    return result;
  }

  async getAirtimeProviders(service: ServicesType) {
    let result;
    switch (service) {
      case Services.FLUTTERWAVE:
        result = await this.flutterwaveService.getAllBillCategories(
          BillCategories.AIRTIME,
        );
    }
    return result;
  }

  verifyAirtimeTransactionStatus;

  getAlllAirtimeTransactions;

  getAirtimeTransactionsByOwnerId;
}
