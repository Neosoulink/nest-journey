import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as dotenv from 'dotenv';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

// ENUMS
import Providers from '../enums/providers';

// INTERFACES
import { ConfigOptions, EnvConfig } from './interfaces';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(
    @Inject(Providers.CONFIG_OPTIONS)
    private readonly options: ConfigOptions,
  ) {
    try {
      const filePath = `${process.env.NODE_ENV || 'development'}.env`;
      const envFile = resolve(
        __dirname,
        '../../',
        this.options.folder,
        filePath,
      );

      this.envConfig = dotenv.parse(readFileSync(envFile));
    } catch (error) {
      console.warn(
        new InternalServerErrorException('🚧 Something went wrong ===>', {
          cause: error,
        }),
      );
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
