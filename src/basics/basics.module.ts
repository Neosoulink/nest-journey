import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

// PROVIDERS
import { BasicsService } from './basics.service';

// CONTROLLERS
import { BasicsController } from './basics.controller';

// MODULES
import { InfosModule } from './infos/infos.module';

// INTERCEPTORS
import { ErrorsInterceptor } from './interceptions/errors/errors.interceptor';

// PIPES
import { ClassValidationPipe } from './pipes/classValidation.pipe';

// CONSTANTS
import Providers from './enums/providers';

@Module({
  imports: [InfosModule.forRoot([{}])],
  controllers: [BasicsController],
  providers: [
    BasicsService,
    {
      provide: APP_PIPE,
      useClass: ClassValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
    {
      provide: Providers.ASYNC_DATABASE_CONNECTION,
      useFactory: async () => {
        const promise = new Promise<string>((res) => {
          setTimeout(() => {
            console.log(
              `Connection established ✅ | Token ${Providers.ASYNC_DATABASE_CONNECTION} registered`,
            );

            res('DATABASE_INSTANCE');
          }, 500);
        });

        return await promise;
      },
    },
  ],
  exports: [Providers.ASYNC_DATABASE_CONNECTION],
})
export class BasicsModule {}
