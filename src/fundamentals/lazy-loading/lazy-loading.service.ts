import { LazyModuleLoader } from '@nestjs/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LazyLoadingService {
  constructor(private readonly lazyModuleLoader: LazyModuleLoader) {}

  async getTheLazyModuleService() {
    const { TheLazyLoadingModule } = await import('./the-lazy-loading.module');
    const moduleRef = this.lazyModuleLoader.load(() => TheLazyLoadingModule);

    const { TheLazyLoadingService } = await import(
      './the-lazy-loading.service'
    );
    const serviceRef = (await moduleRef).get(TheLazyLoadingService);

    return serviceRef.sayHello();
  }
}
