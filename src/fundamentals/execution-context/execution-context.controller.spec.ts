import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContextController } from './execution-context.controller';

describe('ExecutionContextController', () => {
  let controller: ExecutionContextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExecutionContextController],
    }).compile();

    controller = module.get<ExecutionContextController>(ExecutionContextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
