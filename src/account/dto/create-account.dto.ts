import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  accountName;

  @IsString()
  @IsNotEmpty()
  accountNumber;

  @IsString()
  @IsNotEmpty()
  bankCode;

  @IsNumber()
  @IsNotEmpty()
  ownerId;

  @IsString()
  @IsNotEmpty()
  accountType;

  @IsString()
  @IsNotEmpty()
  bankService;

  @IsString()
  @IsNotEmpty()
  currency;
}
