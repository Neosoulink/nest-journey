import { Test, TestingModule } from '@nestjs/testing';
import { TheLazyLoadingService } from './the-lazy-loading.service';

describe('TheLazyLoadingService', () => {
  let service: TheLazyLoadingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheLazyLoadingService],
    }).compile();

    service = module.get<TheLazyLoadingService>(TheLazyLoadingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
