import { Controller, Get, Post } from '@nestjs/common';

// SERVICES
import { BasicsService } from './basics.service';

@Controller()
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) {}

  @Get()
  getHello(): string {
    return this.basicsService.getHello();
  }

  @Post()
  updateHello(): string {
    return this.basicsService.getHello();
  }
}
