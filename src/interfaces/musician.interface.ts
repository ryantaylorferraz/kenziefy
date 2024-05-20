import { z } from "zod";
import { MusicianSchema, musicianPayload } from "../schemas/musician.schema";

export type TMusician = z.infer<typeof MusicianSchema>

export type TMusicianCreate = z.infer<typeof musicianPayload>

export type TMusicianPayload = TMusicianCreate & {bandId: number}