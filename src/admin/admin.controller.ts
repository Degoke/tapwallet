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
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Public()
  @Post('create')
  createAdmin(@Body() createAdminDto) {
    return this.adminService.createNewAdmin(createAdminDto);
  }

  @Public()
  @Get('summary')
  getSummary() {
    return this.adminService.getSummary();
  }

  // @Get('users')
  // getAllUsers() {
  //   return this.adminService.getAllUsers();
  // }

  // @Patch('assign_user_level')
  // //  @CheckAbilities(new ADMIN_PERMISSION())
  // assignUserLevel(@Body() assignUserLevelDto: AssignUserLevelDto) {
  //   return this.adminService.assignRole(assignUserLevelDto);
  // }

  @Public()
  @Get('users/activities/:id')
  //  @CheckAbilities(new ADMIN_PERMISSION())
  getUserActivities(@Param('id') id) {
    return this.adminService.getUserActivities(id);
  }

  @Public()
  @Get('get_all_activities')
  //  @CheckAbilities(new ADMIN_PERMISSION())
  getAllActivities() {
    return this.adminService.getAllActivities();
  }
}
