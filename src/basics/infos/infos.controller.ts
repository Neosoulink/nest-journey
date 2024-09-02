import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';

import { InfosInterceptor } from './infos.interceptor';
import { ZodValidationPipe } from '../pipes/zodValidation.pipe';
import { InfosService } from './infos.service';
import { InfosGuard } from './infos.guard';
import { InfosData, InfosPerms } from './infos.decorator';
import { CreateInfoDto, createInfoSchema } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';

@Controller('infos')
@UseGuards(InfosGuard)
@UseInterceptors(InfosInterceptor)
export class InfosController {
  constructor(private readonly infosService: InfosService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createInfoSchema))
  @InfosPerms(['max', 'sub-max'])
  async create(
    @Body()
    createInfoDto: CreateInfoDto,
  ) {
    return this.infosService.create(createInfoDto);
  }

  @Get()
  findAll() {
    return this.infosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string, @InfosData('name') data: any) {
    return { message: this.infosService.findOne(+id), ...data };
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
