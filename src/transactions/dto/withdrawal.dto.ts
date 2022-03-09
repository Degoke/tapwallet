import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class FWWithdrawalDto {
  @IsString()
  @IsNotEmpty()
  account_bank;

  @IsString()
  @IsNotEmpty()
  account_number;

  @IsString()
  @IsNotEmpty()
  amount;

  @IsString()
  @IsNotEmpty()
  currency;
}
