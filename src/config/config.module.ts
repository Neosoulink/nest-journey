import { DynamicModule, Module, NestModule } from '@nestjs/common';

// SERVICES
import { ConfigService } from './config.service';

// ENUMS
import Providers from '@/enums/providers';

// INTERFACES
import { ConfigOptions } from './interfaces';

@Module({
  providers: [ConfigService],
})
export class ConfigModule implements NestModule {
  configure() {}

  static register(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
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
