import { Module } from '@nestjs/common';

// SERVICES
import { AuthService } from './auth.service';

// CONTROLLERS
import { AuthController } from './auth.controller';

// MODULES
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
