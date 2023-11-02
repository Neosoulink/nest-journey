import { Module } from '@nestjs/common';

// MODULES
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.register({ folder: './config' }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DynamicModulesModule {}
