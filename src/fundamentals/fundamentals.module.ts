import { Module } from '@nestjs/common';

// MODULES
import { DynamicModulesModule } from './dynamic-modules/dynamic-modules';

@Module({
  imports: [DynamicModulesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class FundamentalModules {}
