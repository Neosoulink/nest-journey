import { Module, forwardRef } from '@nestjs/common';
import { CircularDependencyBModule } from './circular-dependency-b.module';

@Module({
  imports: [forwardRef(() => CircularDependencyBModule)],
})
export class CircularDependencyModule {}
