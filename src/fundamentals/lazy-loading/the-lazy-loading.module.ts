import { Module } from '@nestjs/common';

import { TheLazyLoadingService } from './the-lazy-loading.service';

@Module({
  providers: [TheLazyLoadingService],
})
export class TheLazyLoadingModule {}
