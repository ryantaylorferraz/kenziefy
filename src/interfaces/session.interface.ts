import { z } from "zod";
import { albumSchema, createAlbum } from "../schemas/album.schema";
import { accountSchema, createAccount, createReturnAccountSchema,  } from "../schemas/account.schema";
import { sessionReturnSchema, sessionSchema } from "../schemas/session.schema";

export type TSession = z.infer<typeof sessionSchema>
export type TCreateAccount = z.infer<typeof createAccount>
export type TCreateReturnAccount = z.infer<typeof createReturnAccountSchema>
export type TSessionReturn = z.infer<typeof sessionReturnSchema>

