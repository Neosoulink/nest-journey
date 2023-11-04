import { Controller, Get } from '@nestjs/common';

// SERVICES
import { ConfigService } from './config.service';

@Controller('configs')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getConfigFolder() {
    return this.configService.getConfigFolder();
  }
}
