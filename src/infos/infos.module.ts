import { Module } from '@nestjs/common';
import { InfosService } from './infos.service';
import { InfosController } from './infos.controller';

@Module({
  controllers: [InfosController],
  providers: [InfosService],
  exports: [InfosService],
})
export class InfosModule {}
