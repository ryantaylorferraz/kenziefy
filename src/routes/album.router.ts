import { Router } from "express";
import { AlbumController } from "../controllers/AlbumController";
import { Ensure } from "../middlewares/EnsureMiddleware";
import { createAlbum } from "../schemas/album.schema";
import { EnsureBand } from "../middlewares/EnsureBandMiddleware";
import { trackController } from "../controllers/TrackController";
import { ensureAlbumMiddleware } from "../middlewares/EnsureAbumMiddleware";
import { trackCreateBodySchema } from "../schemas/track.schema";
import { albumService } from "../services/AlbumService";

export const albumRouter = Router();

const albumController = new AlbumController(albumService);

albumRouter.get("/", albumController.read)

albumRouter.post("/", Ensure.bodyIsValid(createAlbum), EnsureBand.idExist, albumController.create)

albumRouter.use("/:albumId/tracks", ensureAlbumMiddleware.idExist)

albumRouter.get("/:albumId/tracks", trackController.listByAlbumId)
albumRouter.post("/:albumId/tracks", Ensure.bodyIsValid(trackCreateBodySchema), trackController.create)