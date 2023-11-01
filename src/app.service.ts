import { Inject, Injectable } from '@nestjs/common';

// ENUMS
import Providers from './enums/providers';

// SERVICES
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(
    @Inject(Providers.ASYNC_CONNECTION) private readonly database: string,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDatabase(): string {
    if (this.configService.get('database_visibility') === 'public') {
      return this.database;
    }

    return 'Unable to see the database';
  }
}
