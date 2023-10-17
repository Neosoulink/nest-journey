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
  UsePipes,
} from '@nestjs/common';

// PIPES
import { ZodValidationPipe } from '@/pipes/zodValidation.pipe';

// SERVICES
import { InfosService } from './infos.service';

// DTO
import { CreateInfoDto, createInfoSchema } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';

// EXCEPTIONS
import { HttpExceptionFilter } from '@/exceptions/http-exception.filter';

@Controller('infos')
@UseFilters(HttpExceptionFilter)
export class InfosController {
  constructor(private readonly infosService: InfosService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createInfoSchema))
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
