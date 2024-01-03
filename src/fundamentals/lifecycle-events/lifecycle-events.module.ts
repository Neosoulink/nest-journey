import { Module } from '@nestjs/common';
import { LifecycleEventsService } from './lifecycle-events.service';

@Module({
  providers: [LifecycleEventsService],
})
export class LifecycleEventsModule {}
