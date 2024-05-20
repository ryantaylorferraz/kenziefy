import { z } from "zod";
import { albumSchema, createAlbum } from "../schemas/album.schema";

export type TAlbum = z.infer<typeof albumSchema>
export type TCreateAlbum = z.infer<typeof createAlbum>

export interface IAlbumService {
    list(): Promise<Array<TAlbum>>;
    create(payload: TCreateAlbum): Promise<TAlbum>;
  }
