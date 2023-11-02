import { Module } from '@nestjs/common';

// MODULES
import { CustomProvidesModule } from './custom-providers/custom-providers.module';
import { AsyncProvidersModulesModule } from './asynchronous-providers/asynchronous-providers.module';
import { DynamicModulesModule } from './dynamic-modules/dynamic-modules';

@Module({
  imports: [
    CustomProvidesModule,
    AsyncProvidersModulesModule,
    DynamicModulesModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class FundamentalModules {}
