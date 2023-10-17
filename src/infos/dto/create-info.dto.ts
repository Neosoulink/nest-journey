import { IsNumber, IsString } from 'class-validator';
import { z } from 'zod';

export const createInfoSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type createInfoDtoSchemaType = z.infer<typeof createInfoSchema>;

export class CreateInfoDto implements createInfoDtoSchemaType {
  @IsNumber()
  id: createInfoDtoSchemaType['id'];

  @IsString()
  name: createInfoDtoSchemaType['name'];
}
