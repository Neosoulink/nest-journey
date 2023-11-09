import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

// SERVICES
import { ModuleReferenceBService } from './module-reference-b.service';
import { ModuleReferenceCService } from './module-reference-c.service';

@Injectable()
export class ModuleReferenceService implements OnModuleInit {
  private moduleRefBService: ModuleReferenceBService;
  private moduleRefCService: ModuleReferenceCService;

  constructor(private readonly moduleRef: ModuleRef) {}

  async onModuleInit() {
    this.moduleRefBService = this.moduleRef.get(ModuleReferenceBService);
    this.moduleRefCService = await this.moduleRef.resolve(
      ModuleReferenceCService,
    );
  }

  /**
   * Using the `getClassName` method from the `ModuleReferenceBService` class
   */
  getModuleByRef() {
    return this.moduleRefBService.getClassName();
  }

  /**
   * Use `resolve` to get the scoped provider
   */
  getScopedModuleByRef() {
    return this.moduleRefCService.getClassName();
  }
}
