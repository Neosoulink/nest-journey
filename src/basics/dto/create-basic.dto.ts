import { IsString } from 'class-validator';

// ENTITIES
import { Basic } from '../entities/basic.entity';

export class CreateBasicDto
  implements Omit<Basic, 'id' | 'types' | 'recommendations'>
{
  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly types: string[];

  @IsString()
  readonly description?: string;
}
