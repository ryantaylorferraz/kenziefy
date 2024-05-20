import { Request, Response, request, response } from "express";
import { trackService } from "../services/TrackService";
import { trackSchema } from "../schemas/track.schema";

   class TrackController {

    private service = new trackService();

    public read = async (req: Request, res: Response) => {
        const response = await this.service.list();
        return res.status(200).json(response)
    }
    
    public create = async (req: Request, res: Response): Promise<Response> => {
        try {
          const payload = { ...req.body, albumId: Number(req.params.albumId) };
      
          // Valide o objeto payload usando o esquema (schema)
          trackSchema.parse(payload);
      
          const response = await this.service.create(payload);
      
          return res.status(201).json(response);
        } catch (error) {
          return res.status(400).json({ error: "Dados inválidos" });
        }
      };  

    public listByAlbumId = async (req: Request, res: Response) => {
        const response = await this.service.listByAlbumId(Number(req.params.albumId))

        return res.status(200).json(response)
    }

    public retrieve = async (req: Request, res: Response) => {
        const response = await this.service.retrieve(Number(req.params.trackId))
        return res.status(200).json(response)
    }

}

export const trackController = new TrackController();