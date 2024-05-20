import { z } from "zod";
import { accountSchema } from "./account.schema";

export const sessionSchema = z.object({
    username: z.string().max(50),
    password: z.string().max(255)
})


export const sessionReturnSchema = z.object({
    token: z.string()
})

// export const sessionSchema = accountSchema.pick({ username: true, password: true })

