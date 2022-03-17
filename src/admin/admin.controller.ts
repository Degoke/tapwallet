import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  //  ADMIN_PERMISSION,
  CheckAbilities,
} from 'src/ability/abilities.decorator';
import { Public } from 'src/common/decorators/jwt-auth-guard.decorator';
import { CreateAdminDto } from 'src/user/dto/create-admin.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AdminService } from './admin.service';
//import { AssignUserLevelDto } from './dto/assign-user-level.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminRoles } from 'src/common/types/roles.type';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Public()
  @Post('create')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createNewAdmin(createAdminDto);
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

  @Get('users/email/:email')
  getUserByEmail(@Param('email') email) {
    return this.adminService.getUserByEmail(email);
  }

  // @Get('users/activities/:id')
  // @CheckAbilities(new ADMIN_PERMISSION())
  // getUserActivities(@Param('id') id) {
  //   return this.adminService.getUserActivities(id);
  // }

  // @Get('get_all_activities')
  // @CheckAbilities(new ADMIN_PERMISSION())
  // getAllActivities() {
  //   return this.adminService.getAllActivities();
  // }
}
