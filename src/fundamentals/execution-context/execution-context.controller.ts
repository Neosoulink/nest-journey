import { Controller, Get, UseFilters } from '@nestjs/common';
import { ExecutionContextFilter } from './execution-context.filter';
import { ExecutionContextDecorator } from './execution-context.decorator';

@Controller('fundamentals/execution-context')
@UseFilters(ExecutionContextFilter)
@ExecutionContextDecorator('class')
export class ExecutionContextController {
  @Get('error')
  @ExecutionContextDecorator('method')
  getError() {
    return ({} as any).error();
  }
}
