import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservedAccountDto {
  @IsString()
  @IsNotEmpty()
  accountRecference;

  @IsString()
  @IsNotEmpty()
  accountName;

  @IsString()
  @IsNotEmpty()
  currencyCode;

  @IsString()
  @IsNotEmpty()
  customerEmail;

  @IsString()
  @IsNotEmpty()
  bvn;

  @IsString()
  @IsNotEmpty()
  customerName;

  @IsBoolean()
  @IsNotEmpty()
  getAllAvailaibleBanks;
}
