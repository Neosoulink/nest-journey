import { Controller, Get, UseFilters } from '@nestjs/common';
import { ExecutionContextFilter } from './execution-context.filter';

@Controller('fundamentals/execution-context')
@UseFilters(ExecutionContextFilter)
export class ExecutionContextController {
  @Get('error')
  getError() {
    return ({} as any).response();
  }
}
