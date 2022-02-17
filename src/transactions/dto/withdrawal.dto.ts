import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class WithdrawalDto {
  @IsNumber()
  @IsNotEmpty()
  amount;

  @IsString()
  @IsNotEmpty()
  reference;

  @IsString()
  @IsNotEmpty()
  narration;

  @IsString()
  @IsNotEmpty()
  destinationBankCode;

  @IsString()
  @IsNotEmpty()
  destinationAccountNumber;

  @IsString()
  @IsNotEmpty()
  currency;

  @IsString()
  @IsNotEmpty()
  sourceAccountNumber;

  @IsString()
  @IsNotEmpty()
  beneficiary_name;
}
