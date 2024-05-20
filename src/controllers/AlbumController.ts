import { Request, Response } from "express";
import { AlbumService } from "../services/AlbumService";
import { IAlbumService } from "../interfaces/album.interface";

export class AlbumController {

    // private albumService = new AlbumService();

    constructor(private service: IAlbumService) {
        this.service = service;
    }

    public read = async (req: Request, res: Response) => {
        const response = await this.service.list();
        return res.status(200).json(response)
        
    }
    
    public create = async (req: Request, res: Response) => {
        const response = await this.service.create(req.body)
        return res.status(201).json(response)
    }

}