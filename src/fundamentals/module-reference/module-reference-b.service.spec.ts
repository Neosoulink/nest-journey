import { Test, TestingModule } from '@nestjs/testing';
import { ModuleReferenceBService } from './module-reference-b.service';

describe('ModuleReferenceBService', () => {
  let service: ModuleReferenceBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleReferenceBService],
    }).compile();

    service = module.get<ModuleReferenceBService>(ModuleReferenceBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
