import { hash } from "bcryptjs";
import { prisma } from "../database"
import { IAccountService, TAccount, TCreateAccount, TCreateReturnAccount } from "../interfaces/account.interface";
import { accountSchema, createReturnAccountSchema } from "../schemas/account.schema";

export class AccountService implements IAccountService {
     private account = prisma.account;

     public isNameUnique = async (username: string): Promise<boolean> => {

        const foundUser = this.account.findFirst({ where: {username}})

        return Boolean(foundUser)
     }

     
     public create = async (body: TCreateAccount ): Promise<TCreateReturnAccount> => {
        body.password = await hash(body.password, 10)

        const newAccount = await this.account.create({
            data: body
        })

        return createReturnAccountSchema.parse(newAccount)
    }

        public list = async (): Promise<Array<TCreateReturnAccount>> => {
           const account = await this.account.findMany();
   
           return createReturnAccountSchema.array().parse(account);
        }

        public retrieve = async (accountId: number): Promise<TAccount> => {
           const account = await this.account.findFirst({
            where: {id: accountId}
           });
   
           return accountSchema.parse(account);
        }

}