import { Test, TestingModule } from '@nestjs/testing';
import { InjectionScopesService } from './injection-scopes.service';

describe('InjectionScopesService', () => {
  let service: InjectionScopesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InjectionScopesService],
    }).compile();

    service = module.get<InjectionScopesService>(InjectionScopesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
