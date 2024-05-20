import { z } from "zod";

export const accountSchema = z.object({
    id: z.number().positive(),
    username: z.string().max(50),
    password: z.string().max(255),
    favoriteColor: z.string().nullish(),
    createdAt: z.date(),
    updatedAt: z.date() 
})

export const createAccount = accountSchema.omit({id: true, createdAt: true, updatedAt: true })

export const createReturnAccountSchema = accountSchema.omit({ password: true })
