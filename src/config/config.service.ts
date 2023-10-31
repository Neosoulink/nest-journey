import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

// INTERFACES
import { EnvConfig } from '@/interfaces/env';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor() {
    try {
      const options = { folder: 'config' };
      const filePath = `${process.env.NODE_ENV || 'development'}.env`;
      const envFile = resolve(__dirname, '../../', options.folder, filePath);

      this.envConfig = dotenv.parse(readFileSync(envFile));
    } catch (error) {
      console.warn('🚧 Something went wrong ===>', error);
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
