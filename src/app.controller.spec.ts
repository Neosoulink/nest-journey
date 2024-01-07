import { Test } from '@nestjs/testing';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';

// CONTROLLERS
import { AppController } from './app.controller';

// SERVICES
import { AppService } from './app.service';

const moduleMocker = new ModuleMocker(global);

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  const results = ['test1', 'test2'];

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
    })
      .useMocker((token) => {
        if (token === AppService)
          return { getHello: jest.fn().mockResolvedValue(results) };

        if (typeof token === 'function') {
          const mockMetadata = moduleMocker.getMetadata(
            token,
          ) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
          return new Mock();
        }
      })
      .compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('root', () => {
    it('Should return hello world (unit-test)', async () => {
      // const r = 'Hello World!';
      const spy = jest.spyOn(appService, 'getHello');

      expect(await appController.getHello()).toBe(results);
      expect(spy).toHaveBeenCalled();
    });

    it('Should match the main result (auto-mocking)', async () => {
      expect(await appController.getHello()).toBe(results);
    });
  });
});
