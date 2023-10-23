import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

// PROVIDERS
import { AppService } from './app.service';

// CONTROLLERS
import { AppController } from './app.controller';

// MODULES
import { InfosModule } from './infos/infos.module';

// INTERCEPTORS
import { ErrorsInterceptor } from './interceptions/errors/errors.interceptor';

// PIPES
import { ClassValidationPipe } from './pipes/classValidation.pipe';

@Module({
  imports: [InfosModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ClassValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
})
export class AppModule {}
