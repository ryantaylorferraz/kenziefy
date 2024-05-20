import { Request, Response } from "express";
import { SessionService } from "../services/SessionService";
import { inject, injectable } from "tsyringe";

@injectable()
export class SessionController {
    // private sessionService = new SessionService();
    constructor(@inject("SessionService") private sessionService: SessionService){}

    public login = async (req: Request, res: Response) => {
        const response = await this.sessionService.login(req.body)

        return res.status(201).json(response)
    }
}