import { Module, forwardRef } from '@nestjs/common';
import { CircularDependencyModule } from './circular-dependency.module';

@Module({
  imports: [forwardRef(() => CircularDependencyModule)],
})
export class CircularDependencyBModule {}
