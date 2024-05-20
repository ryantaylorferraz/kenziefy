import { z } from "zod";
import { albumSchema } from "./album.schema";

export const trackSchema = z.object({
    id: z.number().positive(),
    title: z.string().max(255),
    trackNumber: z.number().positive().nullish(),
    length: z.number().positive(),
    albumId: z.number().positive()
})

export const createTrack = trackSchema.omit({id: true})
export const trackCreateBodySchema = trackSchema.omit({id: true, albumId: true})
 
export const createAlbumTrack = trackSchema.omit({albumId: true}).extend({album: albumSchema})
