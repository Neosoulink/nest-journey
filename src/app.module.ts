import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

// PROVIDERS
import { AppService } from './app.service';

// CONTROLLERS
import { AppController } from './app.controller';

// MODULES
import { InfosModule } from './infos/infos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';

// INTERCEPTORS
import { ErrorsInterceptor } from './interceptions/errors/errors.interceptor';

// PIPES
import { ClassValidationPipe } from './pipes/classValidation.pipe';

// CONSTANTS
import Providers from './enums/providers';

@Module({
  imports: [
    InfosModule.forRoot([{}]),
    UsersModule,
    AuthModule,
    ConfigModule.register({ folder: './config' }),
  ],
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
    {
      provide: Providers.ASYNC_CONNECTION,
      useFactory: async () => {
        const promise = new Promise<string>((res) => {
          setTimeout(() => {
            console.log(
              `Connection established ✅ | Token ${Providers.ASYNC_CONNECTION} registered`,
            );

            res('DATABASE_INSTANCE');
          }, 500);
        });

        return await promise;
      },
    },
  ],
})
export class AppModule {}
