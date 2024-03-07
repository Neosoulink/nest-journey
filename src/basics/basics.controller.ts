import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

// SERVICES
import { BasicsService } from './basics.service';

// DTO
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';
import { PaginationQueryDto } from './common/dto/pagination-query.dto';

// By defining the controller with a string. all the generated routes will have a prefix `basics`
@Controller('basics')
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) {}

  // The `@Get` decorator set the method as a get route.
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.basicsService.findAll(paginationQuery);
  }

  // The `@Get` decorator parameter define the route of the method.
  // Note that the name of the method doesn't matter.
  // In the following case, the generated route will be `host/basics/database`
  @Get('/database')
  getDatabase() {
    return this.basicsService.getDatabase();
  }

  // A generic parameter can be passed to the decorator
  // In the following case, to access to this method/route, you have to type `host/basics/1` or `host/basics/something-else`
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basicsService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateBasicDto) {
    return this.basicsService.create(createDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateBasicDto) {
    return this.basicsService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basicsService.remove(id);
  }
}
