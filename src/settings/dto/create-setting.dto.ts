import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSettingDto {
  @IsString()
  @IsNotEmpty()
  name;

  @IsString()
  @IsNotEmpty()
  isActive;

  @IsString()
  @IsNotEmpty()
  value;
}
