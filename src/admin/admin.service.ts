import { Injectable } from '@nestjs/common';
import { BankService } from 'src/bank/bank.service';
import { AdminRoles } from 'src/common/types/roles.type';
import { FlutterwaveService } from 'src/flutterwave/flutterwave.service';
import { CreateSettingDto } from 'src/settings/dto/create-setting.dto';
import { UpdateSettingDto } from 'src/settings/dto/update-setting.dto';
import { SettingsService } from 'src/settings/settings.service';
import { TransactionsService } from 'src/transactions/transactions.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Connection, Repository } from 'typeorm';
import { CreateAdminDto } from 'src/user/dto/create-admin.dto';
//import { Activity } from './entities/activity.entity';

@Injectable()
export class AdminService {
  constructor(
    //   @InjectRepository(Activity)
    //    private readonly activityRepository: Repository<Activity>,
    private readonly settingsService: SettingsService,
    private readonly userService: UserService,
    private readonly walletService: WalletService,
    private readonly flutterwaveService: FlutterwaveService,
    private readonly transactionsService: TransactionsService,
    private readonly bankService: BankService,
  ) {}

  async createNewAdmin(createAdminDto: CreateAdminDto) {
    try {
      const { email } = createAdminDto;
      await this.userService.createAdmin(createAdminDto);

      return {
        message: 'Admin created Successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  // async getSummary() {
  //   try {
  //     const totalUsers = await this.userService.getTotalNumberOfUsers();
  //     const totalUsersNaira = await this.walletService.getTotalUsersNaira();
  //     const nairaWalletBalance = await this.bankService.getNairaWalletBAlance();
  //     const totalNairaTransactions =
  //       await this.transactionsService.getTotalNairaTransactionsBalance();
  //     const totalNairaDeposits =
  //       await this.transactionsService.getTotalNairaDepositsBalance();
  //     const totalNairaWithdrawals =
  //       await this.transactionsService.getTotalNairaWithdrawalsBalance();

  //     return {
  //       ...totalUsers,
  //       ...totalUsersNaira,
  //       ...nairaWalletBalance,
  //       ...totalNairaDeposits,
  //       ...totalNairaTransactions,
  //       ...totalNairaWithdrawals,
  //     };
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async getAllTransactions() {
  //   try {
  //     return await this.transactionsService.getAllTransactions();
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async addNewSetting(createSettingDto: CreateSettingDto) {
    return await this.settingsService.addSetting(createSettingDto);
  }

  // async assignRole(assignUserLevelDto: AssignUserLevelDto) {
  //   try {
  //     const { email, role_name } = assignUserLevelDto;
  //     const user: User = (await this.userService.findByEmail(email)).data;
  //     this.roleService.update(user.role.id, role_name);
  //     return {
  //       message: `${user.firstName} ${user.lastName} has been assigned ${role_name}`,
  //     };
  //   } catch (error) {}
  // }

  // async getAllUsers() {
  //   return await this.userService.find();
  // }

  async getUserByEmail(email: string) {
    return await this.userService.findByEmail(email);
  }

  async getSetting(id) {
    return await this.settingsService.getSetting(id);
  }

  async editSetting(updateSettingDto: UpdateSettingDto, id) {
    return await this.settingsService.updateSetting(id, updateSettingDto);
  }

  // async getUserActivities(id: string) {
  //   try {
  //     return await this.activityRepository.find({ ownerid: id });
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async getAllActivities() {
  //   try {
  //     return await this.activityRepository.find();
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
