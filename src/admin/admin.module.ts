import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SettingsModule } from 'src/settings/settings.module';
import { FlutterwaveModule } from 'src/flutterwave/flutterwave.module';

@Module({
  imports: [SettingsModule, FlutterwaveModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
