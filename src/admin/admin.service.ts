import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from 'src/settings/dto/create-setting.dto';
import { UpdateSettingDto } from 'src/settings/dto/update-setting.dto';
import { SettingsService } from 'src/settings/settings.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly settingsService: SettingsService) {}
  async addNewSetting(createSettingDto: CreateSettingDto) {
    return await this.settingsService.addSetting(createSettingDto);
  }

  async getSetting(id) {
    return await this.settingsService.getSetting(id);
  }

  async editSetting(updateSettingDto: UpdateSettingDto, id) {
    return await this.settingsService.updateSetting(id, updateSettingDto);
  }
}
