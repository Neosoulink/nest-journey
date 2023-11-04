import { Module, Provider, Scope } from '@nestjs/common';

// SERVICES
import { InjectionScopesService } from './injection-scopes.service';

// CONTROLLERS
import { InjectionScopesController } from './injection-scopes.controller';

export const PROVIDERS: Provider[] = [
  InjectionScopesService,
  {
    provide: 'CACHE_MANAGER',
    useValue: 'CACHED_DATA',
    scope: Scope.TRANSIENT,
    // Using `TRANSIENT` scope in a custom provider
  },
];

@Module({
  providers: [...PROVIDERS],
  controllers: [InjectionScopesController],
})
export class InjectionScopesModule {}
