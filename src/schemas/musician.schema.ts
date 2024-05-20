import { z } from "zod";

export const MusicianSchema = z.object({
  id: z.number().positive(),
  firstName: z.string().max(255),
  lastName: z.string().max(255),
  birthDate: z.date().nullish(),
});

export const musicianPayload = MusicianSchema.omit({ id: true }).extend({
  joined: z.number().positive(),
  left: z.date().nullish(),
});
