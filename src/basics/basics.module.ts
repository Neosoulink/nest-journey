import { Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

// PROVIDERS
import { BasicsService } from './basics.service';

// CONTROLLERS
import { BasicsController } from './basics.controller';

// MODULES
import { InfosModule } from './infos/infos.module';

// INTERCEPTORS
import { ErrorsInterceptor } from './interceptions/errors/errors.interceptor';

// ENTITIES
import { Basic } from './entities/basic.entity';
import { Type } from './entities/type.entity';
import { EventEntity } from './event/event.entity';

// CONSTANTS
import Providers from './enums/providers';

@Module({
  imports: [
    TypeOrmModule.forFeature([Basic, Type, EventEntity]),
    InfosModule.forRoot([{}]),
  ],
  controllers: [BasicsController],
  providers: [
    BasicsService,
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          whitelist: true,
          transform: true,
          forbidNonWhitelisted: true,
          transformOptions: {
            enableImplicitConversion: true,
          },
        }),
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
