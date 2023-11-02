import { Test, TestingModule } from '@nestjs/testing';
import { InjectionScopesController } from './injection-scopes.controller';

describe('InjectionScopesController', () => {
  let controller: InjectionScopesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InjectionScopesController],
    }).compile();

    controller = module.get<InjectionScopesController>(InjectionScopesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
