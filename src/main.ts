import { NestFactory } from '@nestjs/core';

// TYPES
import type { NestExpressApplication } from '@nestjs/platform-express';

// MODULES
import { AppModule } from './app.module';

// EXCEPTIONS
import { HttpExceptionFilter } from './basics/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}

bootstrap();
