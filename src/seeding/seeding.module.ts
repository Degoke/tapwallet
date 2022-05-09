import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SeedingMiddleware } from './seeding.middleware';

@Module({})
export class SeedingModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SeedingMiddleware).forRoutes('*');
  }
}
