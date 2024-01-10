import { IsString } from 'class-validator';
import { Basics } from '../entities/basics.entity';

export class CreateDto implements Omit<Basics, 'id'> {
  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly types: string[];
}
