import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { exec } from 'child_process';
import { stdout } from 'process';
import { AbilitiesGuard } from './ability/abilities.guard';
import { AbilityFactory } from './ability/ability.factory';
import { AppModule } from './app.module';
import CustomLogger from './log/custom-logger';

const runMigrations = () => {
  return new Promise<void>((resolve, reject) => {
    exec('npm run typeorm:migrate && npm run typeorm:run', (err, stdout) => {
      if (err) {
        reject(err);
      }
      console.log(stdout);
      resolve();
    });
  });
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    //    cors: true,
    bufferLogs: true,
  });
  app.enableCors({
    credentials: true,
    origin: [
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://127.0.0.1:3001',
      'http://localhost:3001',
    ],
  });
  app.useLogger(app.get(CustomLogger));

  // app.useGlobalGuards(
  //   new AbilitiesGuard(new Reflector(), new AbilityFactory()),
  // );

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  runMigrations();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
