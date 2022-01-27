import { IsNotEmpty, IsString } from 'class-validator';

export class QueryTransactionStatusDto {
  @IsNotEmpty()
  @IsString()
  request_id: string;
}
