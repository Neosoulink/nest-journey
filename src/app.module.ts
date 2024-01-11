import { Module } from '@nestjs/common';

// MODULES
import { BasicsModule } from './basics/basics.module';
import { FundamentalModules } from './fundamentals/fundamentals.module';

// CONTROLLERS
import { AppController } from './app.controller';

// SERVICES
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'nest-journey-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BasicsModule,
    FundamentalModules,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
