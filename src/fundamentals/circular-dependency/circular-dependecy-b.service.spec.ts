import { Test, TestingModule } from '@nestjs/testing';
import { CircularDependencyBService } from './circular-dependency-b.service';

describe('CircularDependencyBService', () => {
  let service: CircularDependencyBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CircularDependencyBService],
    }).compile();

    service = module.get<CircularDependencyBService>(CircularDependencyBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
