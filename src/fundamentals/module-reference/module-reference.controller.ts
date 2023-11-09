import { Controller, Get } from '@nestjs/common';

// SERVICES
import { ModuleReferenceService } from './module-reference.service';

@Controller('fundamentals/module-reference')
export class ModuleReferenceController {
  constructor(
    private readonly moduleReferenceService: ModuleReferenceService,
  ) {}

  @Get('by-reference')
  getModuleByRef() {
    return this.moduleReferenceService.getModuleByRef();
  }

  @Get('scoped-by-reference')
  getScopedModuleByRef() {
    return this.moduleReferenceService.getScopedModuleByRef();
  }
}
