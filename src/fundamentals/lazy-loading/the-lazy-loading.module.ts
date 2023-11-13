import { Module } from '@nestjs/common';

// SERVICES
import { TheLazyLoadingService } from './the-lazy-loading.service';

@Module({
  providers: [TheLazyLoadingService],
})
export class TheLazyLoadingModule {}
