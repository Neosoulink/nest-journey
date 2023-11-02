import { Module } from '@nestjs/common';

// MODULES
import { BasicsModule } from './basics/basics.module';
import { FundamentalModules } from './fundamentals/fundamentals.module';

// CONTROLLERS
import { AppController } from './app.controller';

// SERVICES
import { AppService } from './app.service';

@Module({
  imports: [BasicsModule, FundamentalModules],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
