import { Module } from '@nestjs/common';

// MODULES
import { CustomProvidesModule } from './custom-providers/custom-providers.module';
import { AsyncProvidersModulesModule } from './asynchronous-providers/asynchronous-providers.module';
import { DynamicModulesModule } from './dynamic-modules/dynamic-modules';
import { InjectionScopesModule } from './injection-scopes/injection-scopes.module';

@Module({
  imports: [
    CustomProvidesModule,
    AsyncProvidersModulesModule,
    DynamicModulesModule,
    InjectionScopesModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class FundamentalModules {}
