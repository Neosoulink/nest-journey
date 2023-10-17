import { z } from 'zod';

export const createInfoSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type createInfoDtoSchemaType = z.infer<typeof createInfoSchema>;

export class CreateInfoDto implements createInfoDtoSchemaType {
  id: createInfoDtoSchemaType['id'];
  name: createInfoDtoSchemaType['name'];
}
