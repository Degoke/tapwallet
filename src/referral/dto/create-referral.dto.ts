import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReferralDto {
  @IsNotEmpty()
  @IsNumber()
  referrerId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
