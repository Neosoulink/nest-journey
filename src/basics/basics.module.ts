import { Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { default as Providers } from './enums/providers';
import { ErrorsInterceptor } from './interceptions/errors/errors.interceptor';
import { Basic } from './entities/basic.entity';
import { Type } from './entities/type.entity';
import { EventEntity } from './event/event.entity';
import { InfosModule } from './infos/infos.module';
import { BasicsService } from './basics.service';
import { BasicsController } from './basics.controller';

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
