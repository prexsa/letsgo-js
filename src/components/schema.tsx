import { z } from 'zod'

export const searchSchema = z.object({
  origin: z.string().min(1, 'Origin is required'),
  destination: z.string().min(1, 'Destination is required'),
})

export type SearchSchemaType = z.infer<typeof searchSchema>
