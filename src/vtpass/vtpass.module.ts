import { Module } from '@nestjs/common';
import { VtpassService } from './vtpass.service';
import { VtpassController } from './vtpass.controller';

@Module({
  controllers: [VtpassController],
  providers: [VtpassService]
})
export class VtpassModule {}
