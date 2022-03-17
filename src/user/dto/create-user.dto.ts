import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { AdminRoles } from 'src/common/types/roles.type';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  role: AdminRoles;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+[1-9]\d{1,14}$/)
  phoneNumber: string;

  @IsOptional()
  @IsString()
  referralCode: string;
}
