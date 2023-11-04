import { Controller, Get, Scope } from '@nestjs/common';
import { InjectionScopesService } from './injection-scopes.service';

@Controller({ path: 'injection-scopes', scope: Scope.REQUEST })
export class InjectionScopesController {
  constructor(
    private readonly injectionScopesService: InjectionScopesService,
  ) {}

  @Get('parent-class')
  getInquirer() {
    return this.injectionScopesService.getParentClass();
  }
}
