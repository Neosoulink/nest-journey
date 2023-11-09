import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class ModuleReferenceCService {
  getClassName() {
    return ModuleReferenceCService.name;
  }
}
