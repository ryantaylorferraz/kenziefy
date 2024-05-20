import { Router } from "express";
import { BandController } from "../controllers/BandController";
import { Ensure } from "../middlewares/EnsureMiddleware";
import { createBand } from "../schemas/band.schema";
import { MusicianController } from "../controllers/MusicianController";
import { container } from "tsyringe";
import { BandService } from "../services/BandService";

export const bandRouter = Router();

container.registerSingleton("BandService", BandService)
const bandController = container.resolve(BandController);


const musicianController = new MusicianController();

bandRouter.get("/", bandController.read)

bandRouter.post("/", Ensure.bodyIsValid(createBand), bandController.create)


bandRouter.post("/:bandId/musicians", musicianController.create)


