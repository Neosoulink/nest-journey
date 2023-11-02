import { Injectable, Scope } from '@nestjs/common';

/**
 * Using `REQUEST` scoped service provider
 */
@Injectable({ scope: Scope.REQUEST })
export class InjectionScopesService {}
