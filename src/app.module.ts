import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfosModule } from './infos/infos.module';

@Module({
  imports: [InfosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
