import { IsString } from 'class-validator';

// ENTITIES
import { Basic } from '../entities/basic.entity';
import { Type } from '../entities/type.entity';

export class CreateDto implements Omit<Basic, 'id'> {
  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly types: Type[];
}
