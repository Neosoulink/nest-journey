import { Module } from '@nestjs/common';

// SERVICES
import { ModuleReferenceService } from './module-reference.service';
import { ModuleReferenceBService } from './module-reference-b.service';
import { ModuleReferenceCService } from './module-reference-c.service';

// CONTROLLERS
import { ModuleReferenceController } from './module-reference.controller';

@Module({
  providers: [
    ModuleReferenceService,
    ModuleReferenceBService,
    ModuleReferenceCService,
  ],
  controllers: [ModuleReferenceController],
})
export class ModuleReferenceModule {}
