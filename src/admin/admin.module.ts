import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SettingsService } from 'src/settings/settings.service';

@Module({
  imports: [SettingsService],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
