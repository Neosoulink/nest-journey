import { Inject, Injectable, Scope } from '@nestjs/common';
import { INQUIRER } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
/** @description Using `REQUEST` scoped service provider. */
export class InjectionScopesService {
  // Inquirer injection
  constructor(@Inject(INQUIRER) private parentClass: object) {}

  getParentClass() {
    return this.parentClass.constructor.name;
  }
}
