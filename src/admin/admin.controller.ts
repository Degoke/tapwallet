// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import {
//   ADMIN_PERMISSION,
//   CheckAbilities,
// } from 'src/ability/abilities.decorator';
// import { Public } from 'src/common/decorators/jwt-auth-guard.decorator';
// import { CreateUserDto } from 'src/user/dto/create-user.dto';
// import { UserService } from 'src/user/user.service';
// import { AdminService } from './admin.service';
// import { AssignUserLevelDto } from './dto/assign-user-level.dto';
// import { CreateAdminDto } from './dto/create-admin.dto';
// import { UpdateAdminDto } from './dto/update-admin.dto';

// @Controller('admin')
// export class AdminController {
//   constructor(private readonly adminService: AdminService) {}

//   @Public()
//   @Post('create')
//   createAdmin(@Body() createUserDto: CreateUserDto) {
//     return this.adminService.createNewAdmin(createUserDto);
//   }

//   @Get('users')
//   getAllUsers() {
//     return this.adminService.getAllUsers();
//   }

//   @Patch('assign_user_level')
//   @CheckAbilities(new ADMIN_PERMISSION())
//   assignUserLevel(@Body() assignUserLevelDto: AssignUserLevelDto) {
//     return this.adminService.assignRole(assignUserLevelDto);
//   }

//   @Get('users/email/:email')
//   getUserByEmail(@Param('email') email) {
//     return this.adminService.getUserByEmail(email);
//   }

//   @Get('users/activities/:id')
//   @CheckAbilities(new ADMIN_PERMISSION())
//   getUserActivities(@Param('id') id) {
//     return this.adminService.getUserActivities(id);
//   }

//   @Get('get_all_activities')
//   @CheckAbilities(new ADMIN_PERMISSION())
//   getAllActivities() {
//     return this.adminService.getAllActivities();
//   }

//   @Get('users/phone/:phone')
//   getUserByPhone(@Param('phone') phone) {
//     return this.adminService.getUserByPhone(phone);
//   }

//   @Get('users/firstname/:firstName')
//   getUserByFirstName(@Param('firstName') firstName) {
//     return this.adminService.getUserByFirstName(firstName);
//   }

//   @Get('users/lastname/:lastName')
//   getUserByLatName(@Param('lastName') lastName) {
//     return this.adminService.getUserByLastName(lastName);
//   }
// }
