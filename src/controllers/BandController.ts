import { Request, Response } from "express";
import { BandService } from "../services/BandService";
import { injectable, inject } from "tsyringe";
import { IBandService } from "../interfaces/band.interface";

@injectable()
export class BandController {
    constructor(@inject("BandService") private service: IBandService){}

    private bandService = new BandService();

    public read = async (req: Request, res: Response) => {
        const response = await this.service.list();
        return res.status(200).json(response)
    }
    
    public create = async (req: Request, res: Response) => {
        const response = await this.service.create(req.body)

        return res.status(201).json(response)
    }   

}