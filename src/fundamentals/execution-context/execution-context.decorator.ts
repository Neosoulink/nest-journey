import { SetMetadata } from '@nestjs/common';

export const ExecutionContextDecorator = (...args: string[]) =>
  SetMetadata('execution-context', args);
