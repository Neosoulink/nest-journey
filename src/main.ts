import { NestFactory } from '@nestjs/core';

// TYPES
import type { NestExpressApplication } from '@nestjs/platform-express';

// MODULES
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}

bootstrap();
