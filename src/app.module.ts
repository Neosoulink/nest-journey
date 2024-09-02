import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BasicsModule } from './basics/basics.module';
import { FundamentalModules } from './fundamentals/fundamentals.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
