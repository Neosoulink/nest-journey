import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class LifecycleEventsService
  implements OnModuleInit, OnApplicationShutdown
{
  onApplicationShutdown(signal?: string | undefined) {
    console.log(signal);
  }
  onModuleInit() {
    console.log('Module initialized');
  }
}
