import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CircularDependencyBService } from './circular-dependency-b.service';

@Injectable()
export class CircularDependencyAService {
  constructor(
    @Inject(forwardRef(() => CircularDependencyBService))
    private readonly CDB: CircularDependencyBService,
  ) {}
}
