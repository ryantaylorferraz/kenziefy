import { Request, Response } from "express";
import { AlbumService } from "../services/AlbumService";
import { AccountService } from "../services/AccountService";
import { injectable, inject } from "tsyringe";
import { IAccountService } from "../interfaces/account.interface";

@injectable()
export class AccountController {

    // private accountService = new AccountService();

    constructor(@inject("AccountService") private service: IAccountService) {}
    
    
    public create = async (req: Request, res: Response) => {
        const response = await this.service.create(req.body)

        return res.status(201).json(response)
    }

    public list = async (req: Request, res: Response) => {
        const response = await this.service.list()
        
        return res.status(200).json(response)
    }

    public retrieve = async (req: Request, res: Response) => {
        const account = await this.service.retrieve(Number(req.params.accountId));

        return res.status(200).json(account)
    };
    
}