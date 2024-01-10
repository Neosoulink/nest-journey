import { PartialType } from '@nestjs/mapped-types';

// DTO
import { CreateDto } from './create.dto';

export class UpdateDto extends PartialType(CreateDto) {}
