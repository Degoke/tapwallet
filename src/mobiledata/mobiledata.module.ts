import { Module } from '@nestjs/common';
import { MobiledataService } from './mobiledata.service';
import { MobiledataController } from './mobiledata.controller';

@Module({
  controllers: [MobiledataController],
  providers: [MobiledataService]
})
export class MobiledataModule {}
