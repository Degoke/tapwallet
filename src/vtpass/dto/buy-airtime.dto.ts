import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BuyAirtimeDto {
  @IsNotEmpty()
  @IsString()
  request_id: string;

  @IsNotEmpty()
  @IsString()
  serviceID: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  phone: string;
}
