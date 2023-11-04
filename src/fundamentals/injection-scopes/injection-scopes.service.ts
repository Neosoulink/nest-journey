import { Inject, Injectable, Scope } from '@nestjs/common';
import { INQUIRER } from '@nestjs/core';

/**
 * Using `REQUEST` scoped service provider
 */
@Injectable({ scope: Scope.REQUEST })
export class InjectionScopesService {
  // Inquirer injection
  constructor(@Inject(INQUIRER) private parentClass: object) {}

  getParentClass() {
    return this.parentClass.constructor.name;
  }
}
