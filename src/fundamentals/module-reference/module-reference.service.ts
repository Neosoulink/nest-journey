import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

// SERVICES
import { ModuleReferenceBService } from './module-reference-b.service';

@Injectable()
export class ModuleReferenceService implements OnModuleInit {
  private moduleRefBService: ModuleReferenceBService;

  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit() {
    this.moduleRefBService = this.moduleRef.get(ModuleReferenceBService);
  }

  /**
   * Using the `getClassName` method from the `ModuleReferenceBService` class
   */
  getClassNameByReference() {
    return this.moduleRefBService.getClassName();
  }
}
