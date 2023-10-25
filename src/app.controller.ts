import { Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import Providers from './enums/providers';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(Providers.ASYNC_CONNECTION) private readonly database: string,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  updateHello(): string {
    return this.appService.getHello();
  }

  @Get('/database')
  getDatabase(): string {
    return this.database;
  }
}
