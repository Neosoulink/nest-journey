import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CircularDependencyAService } from './circular-dependency-a.service';

@Injectable()
export class CircularDependencyBService {
  constructor(
    @Inject(forwardRef(() => CircularDependencyAService))
    private readonly CDA: CircularDependencyAService,
  ) {}
}
