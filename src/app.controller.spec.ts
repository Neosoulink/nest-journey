import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('root', () => {
    it('Should return hello world', async () => {
      const r = 'Hello World!';
      const spy = jest.spyOn(appService, 'getHello');

      expect(await appController.getHello()).toBe(r);
      expect(spy).toHaveBeenCalled();
    });
  });
});
