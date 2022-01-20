import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting) private settingRepository: Repository<Setting>,
  ) {}
  async getSetting(id: number) {
    return await this.settingRepository.findOne(id);
  }

  async addSetting(createSettingDto: CreateSettingDto) {
    const setting = await this.settingRepository.create(createSettingDto);
    return await this.settingRepository.save(setting);
  }

  async updateSetting(id: number, updateSettingDto: UpdateSettingDto) {
    await this.settingRepository.update(id, updateSettingDto);
  }
}
