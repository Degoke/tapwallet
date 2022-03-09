import { Injectable } from '@nestjs/common';
import { FlutterwaveService } from 'src/flutterwave/flutterwave.service';
import { CreateSettingDto } from 'src/settings/dto/create-setting.dto';
import { UpdateSettingDto } from 'src/settings/dto/update-setting.dto';
import { SettingsService } from 'src/settings/settings.service';
import { TransactionsService } from 'src/transactions/transactions.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly userService: UserService,
    private readonly walletService: WalletService,
    private readonly flutterwaveService: FlutterwaveService,
    private readonly transactionsService: TransactionsService,
  ) {}

  async createNewAdmin(createUserDto: CreateUserDto) {
    try {
      const { email } = createUserDto;
      await this.userService.create(createUserDto);
      await this.userService.markAsAdmin(email);

      return {
        message: 'Admin created Successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  async getSummary() {
    try {
      const totalUsers = await this.userService.getTotalNumberOfUsers();
      const totalUsersNaira = await this.walletService.getTotalUsersNaira();
      const nairaWalletBalance =
        await this.flutterwaveService.getNairaWalletBalance();
      const totalNairaTransactions =
        await this.transactionsService.getTotalNairaTransactionsBalance();
      const totalNairaDeposits =
        await this.transactionsService.getTotalNairaDepositsBalance();
      const totalNairaWithdrawals =
        await this.transactionsService.getTotalNairaWithdrawalsBalance();

      return {
        ...totalUsers,
        ...totalUsersNaira,
        ...nairaWalletBalance,
        ...totalNairaDeposits,
        ...totalNairaTransactions,
        ...totalNairaWithdrawals,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllTransactions() {
    try {
      return await this.transactionsService.getAllTransactions();
    } catch (error) {
      throw error;
    }
  }

  async addNewSetting(createSettingDto: CreateSettingDto) {
    return await this.settingsService.addSetting(createSettingDto);
  }

  async getAllUsers() {
    return await this.userService.find();
  }

  async getUserByEmail(email: string) {
    return await this.userService.findByEmail(email);
  }

  async getUserByPhone(phoneNumber: string) {
    return await this.userService.findByPhone(phoneNumber);
  }

  async getUserByFirstName(firstName: string) {
    return await this.userService.findByFirstName(firstName);
  }
  async getUserByLastName(lastName: string) {
    return await this.userService.findByLastName(lastName);
  }

  async getSetting(id) {
    return await this.settingsService.getSetting(id);
  }

  async editSetting(updateSettingDto: UpdateSettingDto, id) {
    return await this.settingsService.updateSetting(id, updateSettingDto);
  }
}
