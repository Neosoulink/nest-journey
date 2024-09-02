import { DynamicModule, Module, NestModule } from '@nestjs/common';

import { default as Providers } from '../enums/providers';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';
import { ConfigOptions } from './interfaces';
import { ConfigurableModuleClass } from './config.module.definition';

@Module({
  providers: [ConfigService],
})
export class ConfigModule
  extends ConfigurableModuleClass
  implements NestModule
{
  configure() {}

  static register(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      controllers: [ConfigController],
      providers: [
        {
          provide: Providers.CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
