import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleService } from 'src/role/role.service';
import { CreateSettingDto } from 'src/settings/dto/create-setting.dto';
import { UpdateSettingDto } from 'src/settings/dto/update-setting.dto';
import { SettingsService } from 'src/settings/settings.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import User from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { AssignUserLevelDto } from './dto/assign-user-level.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Connection, Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
    private readonly settingsService: SettingsService,
    private readonly userService: UserService,
    private readonly roleService: RoleService,
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
  async addNewSetting(createSettingDto: CreateSettingDto) {
    return await this.settingsService.addSetting(createSettingDto);
  }

  async assignRole(assignUserLevelDto: AssignUserLevelDto) {
    try {
      const { email, role_name } = assignUserLevelDto;
      const user: User = (await this.userService.findByEmail(email)).data;
      this.roleService.update(user.role.id, role_name);
      return {
        message: `${user.firstName} ${user.lastName} has been assigned ${role_name}`,
      };
    } catch (error) {}
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

  async getUserActivities(id: string) {
    try {
      return await this.activityRepository.find({ ownerid: id });
    } catch (error) {
      throw error;
    }
  }

  async getAllActivities() {
    try {
      return await this.activityRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
