import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './interfaces/User.interface';
import { JwtAuthGaurd } from 'src/common/gaurds/jwt-auth.gaurd';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // @UseGuards(JwtAuthGaurd)
  @Get()
  getUser() {
    return this.userService.find();
  }

  @Get(':email')
  getUserByEmail(@Param('email') email) {
    return this.userService.findByEmail(email);
  }
}
