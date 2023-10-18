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
} from '@nestjs/common';

// PIPES
// import { ZodValidationPipe } from '@/pipes/zodValidation.pipe';
// import { ClassValidationPipe } from '@/pipes/classValidation.pipe';

// GUARDS
import { InfosGuard } from './infos.guard';

// SERVICES
import { InfosService } from './infos.service';

// DTO
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';

@Controller('infos')
@UseGuards(InfosGuard)
export class InfosController {
  constructor(private readonly infosService: InfosService) {}

  @Post()
  // @UsePipes(new ZodValidationPipe(createInfoSchema))
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
