import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { InfosService } from './infos.service';
import { InfosController } from './infos.controller';

// MIDDLEWARES
import { InfosMiddleware } from './infos.middleware';

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

  static forRoot(entity: any[] = [], options?) {
    console.log(`Dynamic modules: ${InfosModule.name} ==>`, entity, options);

    return {
      module: InfosModule,
      controllers: [InfosController],
      providers: [InfosService],
      exports: [InfosService],
    };
  }
}
