import { Test, TestingModule } from '@nestjs/testing';
import { ModuleReferenceService } from './module-reference.service';

describe('ModuleReferenceService', () => {
  let service: ModuleReferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleReferenceService],
    }).compile();

    service = module.get<ModuleReferenceService>(ModuleReferenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
