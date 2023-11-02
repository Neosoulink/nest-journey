import { Controller, Scope } from '@nestjs/common';

@Controller({ path: 'injection-scopes', scope: Scope.REQUEST })
export class InjectionScopesController {}
