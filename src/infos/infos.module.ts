import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

// MIDDLEWARES
import { InfosMiddleware } from './infos.middleware';

// SERVICES
import { InfosService } from './infos.service';

// CONTROLLERS
import { InfosController } from './infos.controller';

@Module({
  controllers: [InfosController],
  providers: [InfosService],
  exports: [InfosService],
})
export class InfosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(InfosMiddleware)
      .forRoutes({ path: 'infos', method: RequestMethod.GET });
  }

  static forRoot(entity: any[] = [], options?): DynamicModule {
    console.log(`Dynamic modules: ${InfosModule.name} ==>`, entity, options);

    return {
      module: InfosModule,
      controllers: [InfosController],
      providers: [InfosService],
      exports: [InfosService],
    };
  }
}
