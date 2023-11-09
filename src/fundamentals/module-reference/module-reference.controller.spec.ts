import { Test, TestingModule } from '@nestjs/testing';
import { ModuleReferenceController } from './module-reference.controller';

describe('ModuleReferenceController', () => {
  let controller: ModuleReferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleReferenceController],
    }).compile();

    controller = module.get<ModuleReferenceController>(ModuleReferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
