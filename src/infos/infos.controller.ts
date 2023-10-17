import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  ParseIntPipe,
} from '@nestjs/common';
import { InfosService } from './infos.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';

@Controller('infos')
@UseFilters(HttpExceptionFilter)
export class InfosController {
  constructor(private readonly infosService: InfosService) {}

  @Post()
  create(@Body() createInfoDto: CreateInfoDto) {
    return this.infosService.create(createInfoDto);
  }

  @Get()
  findAll() {
    return this.infosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.infosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInfoDto: UpdateInfoDto) {
    return this.infosService.update(+id, updateInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.infosService.remove(+id);
  }

  @Get('debug/error')
  debugError() {
    return this.infosService.error();
  }
}
