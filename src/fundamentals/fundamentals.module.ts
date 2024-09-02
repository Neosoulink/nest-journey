import { Module } from '@nestjs/common';

import { CustomProvidesModule } from './custom-providers/custom-providers.module';
import { AsyncProvidersModulesModule } from './asynchronous-providers/asynchronous-providers.module';
import { DynamicModulesModule } from './dynamic-modules/dynamic-modules';
import { InjectionScopesModule } from './injection-scopes/injection-scopes.module';
import { CircularDependencyModule } from './circular-dependency/circular-dependency.module';
import { ModuleReferenceModule } from './module-reference/module-reference.module';
import { LazyLoadingModule } from './lazy-loading/lazy-loading.module';
import { ExecutionContextModule } from './execution-context/execution-context.module';
import { LifecycleEventsModule } from './lifecycle-events/lifecycle-events.module';

import { CircularDependencyAService } from './circular-dependency/circular-dependency-a.service';
import { CircularDependencyBService } from './circular-dependency/circular-dependency-b.service';

@Module({
  imports: [
    CustomProvidesModule,
    AsyncProvidersModulesModule,
    DynamicModulesModule,
    InjectionScopesModule,
    CircularDependencyModule,
    ModuleReferenceModule,
    LazyLoadingModule,
    ExecutionContextModule,
    LifecycleEventsModule,
  ],
  controllers: [],
  providers: [CircularDependencyAService, CircularDependencyBService],
  exports: [],
})
export class FundamentalModules {}
