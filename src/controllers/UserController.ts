import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    public login = (req: Request, res: Response) => {
        const userLogin = new UserService();
        const response = userLogin.login();

        return res.json(201).json(response)
    }

    public get = (req: Request, res: Response) => {
        const userGet = new UserService();
        const response = userGet.getUser();

        return res.status(200).json(response)
    }
}