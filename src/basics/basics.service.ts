import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
  constructor() {}

  getHello(): string {
    return 'Hello World!';
  }
}
