import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SettingsModule } from 'src/settings/settings.module';
import { FlutterwaveModule } from 'src/flutterwave/flutterwave.module';
import { UserModule } from 'src/user/user.module';
// import { RoleModule } from 'src/role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Activity } from './entities/activity.entity';

@Module({
  imports: [
//    TypeOrmModule.forFeature([Activity]),
    SettingsModule,
    FlutterwaveModule,
    UserModule,
//    RoleModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
