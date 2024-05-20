import { z } from "zod";
import { albumSchema, createAlbum } from "../schemas/album.schema";
import { accountSchema, createAccount, createReturnAccountSchema,  } from "../schemas/account.schema";

export type TAccount = z.infer<typeof accountSchema>
export type TCreateAccount = z.infer<typeof createAccount>
export type TCreateReturnAccount = z.infer<typeof createReturnAccountSchema>

export interface IAccountService  {
    list(): Promise<Array<TCreateReturnAccount>>
    create(body: TCreateAccount ): Promise<TCreateReturnAccount>
    retrieve(accountId: number): Promise<TAccount>
    isNameUnique(username: string): Promise<boolean>
}

