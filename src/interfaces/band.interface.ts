import { z } from "zod";
import { bandSchema, createBand } from "../schemas/band.schema";

export type TBand = z.infer<typeof bandSchema>
export type TCreateBand = z.infer<typeof createBand>

export interface IBandService {
    list(): Promise<Array<TBand>>;
    create(body: TCreateBand):Promise<TBand>
}