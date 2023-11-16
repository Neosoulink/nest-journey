import { Module } from '@nestjs/common';

// CONTROLLERS
import { ExecutionContextController } from './execution-context.controller';

@Module({
  controllers: [ExecutionContextController],
})
export class ExecutionContextModule {}
