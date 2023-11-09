import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleReferenceBService {
  getClassName() {
    return ModuleReferenceBService.name;
  }
}
