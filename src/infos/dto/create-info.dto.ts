import { z } from 'zod';

export const createInfoSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type CreateInfoDto = z.infer<typeof createInfoSchema>;
