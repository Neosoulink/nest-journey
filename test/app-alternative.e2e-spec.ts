import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

// MODULES
import { AppModule } from '../src/app.module';

// SERVICES
import { AppService } from '../src/app.service';

describe('App', () => {
  let app: INestApplication;
  const appService = { getHello: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET Tests list', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(appService.getHello());
  });

  afterAll(async () => {
    await app.close();
  });
});
