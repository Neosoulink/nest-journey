import { Test, TestingModule } from '@nestjs/testing';
import { ModuleReferenceCService } from './module-reference-c.service';

describe('ModuleReferenceCService', () => {
  let service: ModuleReferenceCService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleReferenceCService],
    }).compile();

    service = module.get<ModuleReferenceCService>(ModuleReferenceCService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
