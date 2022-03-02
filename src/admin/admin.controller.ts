import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly userService: UserService,
  ) {}

  @Get('users')
  getAllUsers() {
    return this.adminService.getAllUsers();
  }
  @Get('users/email/:email')
  getUserByEmail(@Param('email') email) {
    return this.adminService.getUserByEmail(email);
  }

  @Get('users/phone/:phone')
  getUserByPhone(@Param('phone') phone) {
    return this.adminService.getUserByPhone(phone);
  }

  @Get('users/firstname/:firstName')
  getUserByFirstName(@Param('firstName') firstName) {
    return this.adminService.getUserByFirstName(firstName);
  }

  @Get('users/lastname/:lastName')
  getUserByLatName(@Param('lastName') lastName) {
    return this.adminService.getUserByLastName(lastName);
  }

  @Get('query')
  queryBuilder() {
    return this.userService.queryBuilder();
  }
}
