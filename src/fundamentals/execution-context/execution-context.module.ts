import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { ExecutionContextController } from './execution-context.controller';
import { ExecutionContextGuard } from './execution-context.guard';

@Module({
  controllers: [ExecutionContextController],
  providers: [{ provide: APP_GUARD, useClass: ExecutionContextGuard }],
})
export class ExecutionContextModule {}
