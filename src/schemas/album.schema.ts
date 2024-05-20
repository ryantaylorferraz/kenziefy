import { z } from "zod";

export const albumSchema = z.object({
    id: z.number().positive(),
    title: z.string().max(255),
    year: z.number(),
    bandId: z.number()
})

export const createAlbum = albumSchema.omit({id: true})
