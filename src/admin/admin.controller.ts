import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CheckAbilities } from 'src/ability/abilities.decorator';
import { CreateAccountDto } from 'src/account/dto/create-account.dto';
import { Public } from 'src/common/decorators/jwt-auth-guard.decorator';
import { ADMIN_ROLES } from 'src/common/types/roles.type';
import { CreateAdminDto } from 'src/user/dto/create-admin.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AdminService } from './admin.service';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Public()
  @Post('create')
  createAdmin(@Body() payload: CreateAdminDto) {
    return this.adminService.createNewAdmin(payload);
  }

  @Public()
  @Get('summary')
  getAdminSummary() {
    return this.adminService.getSummary();
  }
}
