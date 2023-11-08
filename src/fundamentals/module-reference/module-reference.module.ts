import { Module } from '@nestjs/common';
import { ModuleReferenceService } from './module-reference.service';

@Module({
  providers: [ModuleReferenceService]
})
export class ModuleReferenceModule {}
