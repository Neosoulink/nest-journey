import { Test, TestingModule } from '@nestjs/testing';
import { LazyLoadingService } from './lazy-loading.service';

describe('LazyLoadingService', () => {
  let service: LazyLoadingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LazyLoadingService],
    }).compile();

    service = module.get<LazyLoadingService>(LazyLoadingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
