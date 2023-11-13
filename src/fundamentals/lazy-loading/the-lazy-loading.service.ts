import { Injectable } from '@nestjs/common';

@Injectable()
export class TheLazyLoadingService {
  async sayHello() {
    return 'Hello';
  }
}
