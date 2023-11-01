import { Controller, Get, Post } from '@nestjs/common';

// SERVICES
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
    return this.appService.getDatabase();
  }
}
