import { NestFactory } from '@nestjs/core';

// TYPES
import type { NestExpressApplication } from '@nestjs/platform-express';

// MODULES
import { AppModule } from './app.module';

// PIPES
// import { ClassValidationPipe } from './pipes/classValidation.pipe';

// EXCEPTIONS
import { HttpExceptionFilter } from './exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useGlobalPipes(new ClassValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}

bootstrap();
