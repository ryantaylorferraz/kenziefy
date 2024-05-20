import { compare } from "bcryptjs";
import { prisma } from "../database"
import { TCreateAccount, TCreateReturnAccount } from "../interfaces/account.interface";
import { AppError } from "../errors/AppError";
import { TSession, TSessionReturn } from "../interfaces/session.interface";
import { sign } from "jsonwebtoken";
import { sessionReturnSchema } from "../schemas/session.schema";
import { injectable } from "tsyringe";

@injectable()
export class SessionService {
     private account = prisma.account;

    public login = async ({username, password}: TSession ): Promise<TSessionReturn> => {
        const foundUser = await this.account.findFirst({
            where: {username: username}
        })

        if(!foundUser) {
             throw new AppError(401, "Invalid credentials")
        }

        const passwordMatch = await compare(password, foundUser.password)

       if(!passwordMatch) {
        throw new AppError(401, "Invalid credentials")
       }

       const secret = process.env.JWT_SECRETT!;
       const expiresIn = process.env.EXPIRES_IN

       const token = sign({favoriteColor: foundUser.favoriteColor, role: foundUser.role}, secret, {
        expiresIn: expiresIn,
        subject: foundUser.id.toString()
       })

       return sessionReturnSchema.parse({token});
    }

}