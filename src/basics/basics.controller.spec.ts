import { Test, TestingModule } from '@nestjs/testing';
import { BasicsController } from './basics.controller';
import { BasicsService } from './basics.service';

describe('BasicsController', () => {
  let appController: BasicsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BasicsController],
      providers: [BasicsService],
    }).compile();

    appController = app.get<BasicsController>(BasicsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
