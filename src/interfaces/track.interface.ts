import { z } from "zod";
import { trackSchema, createTrack, createAlbumTrack } from "../schemas/track.schema";

export type TTrack = z.infer<typeof trackSchema>
export type TCreateTrack = z.infer<typeof createTrack>
export type TcreateAlbumTrack = z.infer<typeof createAlbumTrack>

    