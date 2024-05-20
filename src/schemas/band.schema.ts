import { z } from "zod";


export const bandSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(255),
    foundedAt: z.number().positive().nullish()
})

export const createBand = bandSchema.omit({id: true})
