import { DynamicModule, Module, NestModule } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
})
export class ConfigModule implements NestModule {
  configure() {}

  static register(): DynamicModule {
    return {
      module: ConfigModule,
      providers: [ConfigService],
      exports: [ConfigService],
    };
  }
}
