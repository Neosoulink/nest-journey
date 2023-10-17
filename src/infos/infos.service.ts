import {
  HttpException,
  HttpStatus,
  Injectable,
  UsePipes,
} from '@nestjs/common';
import { CreateInfoDto, createInfoSchema } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { ZodValidationPipe } from 'src/pipes/zodValidation.pipe';

@Injectable()
export class InfosService {
  @UsePipes(new ZodValidationPipe(createInfoSchema))
  create(createInfoDto: CreateInfoDto) {
    console.log(createInfoDto.id);

    return 'This action adds a new info';
  }

  findAll() {
    return `This action returns all infos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} info`;
  }

  update(id: number, updateInfoDto: UpdateInfoDto) {
    console.log(updateInfoDto);

    return `This action updates a #${id} info`;
  }

  remove(id: number) {
    return `This action removes a #${id} info`;
  }

  error() {
    throw new HttpException('forbidden', HttpStatus.FORBIDDEN);
  }
}
