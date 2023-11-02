import { Inject, Injectable } from '@nestjs/common';

// ENUMS
import Providers from './enums/providers';

@Injectable()
export class BasicsService {
  constructor(
    @Inject(Providers.ASYNC_DATABASE_CONNECTION)
    private readonly database: string,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDatabase(): string {
    return this.database;
  }
}
