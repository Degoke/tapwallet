import { PartialType } from '@nestjs/mapped-types';
import { CreateMerchantApiDto } from './create-merchant-api.dto';

export class UpdateMerchantApiDto extends PartialType(CreateMerchantApiDto) {}
