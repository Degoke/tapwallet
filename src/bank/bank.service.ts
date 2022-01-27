import {
  CACHE_MANAGER,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as FlutterWave from 'flutterwave-node-v3';
import { Cache } from 'cache-manager';
import { ServicesSettings } from 'src/common/types/settings.type';
import { Services } from 'src/common/types/service.type';
import { FlutterwaveService } from 'src/flutterwave/flutterwave.service';
import { SettingsService } from 'src/settings/settings.service';
import { MonnifyService } from 'src/monnify/monnify.service';

@Injectable()
export class BankService {
  private currentService: FlutterwaveService | MonnifyService;
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly settingsService: SettingsService,
    private readonly flutterwaveService: FlutterwaveService,
    private readonly monnifyService: MonnifyService,
  ) {}

  async getCurrentService() {
    let data;
    data = await this.cacheManager.get<any>(ServicesSettings.BANK_SERVICE);

    if (!data) {
      data = await this.settingsService.getSetting(
        ServicesSettings.BANK_SERVICE,
      );
    }

    const status = data.isActive;

    if (!status) {
      throw new HttpException(
        'Service currently unavailable',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
    const service = data.value;

    switch (service) {
      case Services.FLUTTERWAVE:
        this.currentService = this.flutterwaveService;
        break;
      case Services.MONNIFY:
        this.currentService = this.monnifyService;
    }
  }

  async getAllBanks() {
    await this.getCurrentService();

    return this.currentService.getAllBankCodes();
  }
}
