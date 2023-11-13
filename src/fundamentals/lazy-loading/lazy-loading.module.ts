import { Module } from '@nestjs/common';
import { LazyLoadingService } from './lazy-loading.service';

@Module({
  providers: [LazyLoadingService],
})
export class LazyLoadingModule {}
