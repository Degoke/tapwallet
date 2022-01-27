import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InitiateTransferDto {
  @IsNumber()
  @IsNotEmpty()
  amount;

  @IsString()
  @IsNotEmpty()
  referencene;

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
}
