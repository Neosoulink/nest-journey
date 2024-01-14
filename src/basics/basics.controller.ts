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

@Controller('basics')
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.basicsService.findAll(paginationQuery);
  }

  @Get('/database')
  getDatabase() {
    return this.basicsService.getDatabase();
  }

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

  // @Post(':id')
  // recommendation(@param('id')id: string, @Body() this){}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basicsService.remove(id);
  }
}
