import { Test, TestingModule } from '@nestjs/testing';
import { CircularDependencyAService } from './circular-dependency-a.service';

describe('CircularDependencyAService', () => {
  let service: CircularDependencyAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CircularDependencyAService],
    }).compile();

    service = module.get<CircularDependencyAService>(CircularDependencyAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
