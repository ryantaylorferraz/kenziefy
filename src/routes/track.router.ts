import { Router } from "express";
import { Ensure } from "../middlewares/EnsureMiddleware";
import { createTrack } from "../schemas/track.schema";
import { trackController } from "../controllers/TrackController";

export const trackRouter = Router();

trackRouter.get("/", trackController.read)

trackRouter.get("/:trackId", trackController.retrieve)
