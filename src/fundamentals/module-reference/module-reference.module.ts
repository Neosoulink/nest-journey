import { Module } from '@nestjs/common';
import { ModuleReferenceService } from './module-reference.service';
import { ModuleReferenceBService } from './module-reference-b.service';
import { ModuleReferenceController } from './module-reference.controller';

@Module({
  providers: [ModuleReferenceService, ModuleReferenceBService],
  controllers: [ModuleReferenceController],
})
export class ModuleReferenceModule {}
