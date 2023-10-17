import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

// PROVIDERS
import { AppService } from './app.service';

// CONTROLLERS
import { AppController } from './app.controller';

// MODULES
import { InfosModule } from './infos/infos.module';

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
  ],
})
export class AppModule {}
