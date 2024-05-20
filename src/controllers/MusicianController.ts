import { Request, Response } from "express";
import { MusicianService } from "../services/MusicianService";

export class MusicianController {

    private musicianService = new MusicianService();

    // public list = async (req: Request, res: Response): Promise<Response> => {
    //     const response = await this.musicianService.list()
    //     return res.status(200).json(response)
    // }

    public create = async (req: Request, res: Response) => {
        const payload = { ...req.body, bandId: Number(req.params.bandId) }
        const newMusician = await this.musicianService.create(payload)

        return res.status(201).json(newMusician)
    }
}