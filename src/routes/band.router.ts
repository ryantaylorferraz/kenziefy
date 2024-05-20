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

/**
 * @openapi
 * /api/bands:
 *  get:
 *    tags:
 *      - Bandas
 *    summary: Listar bandas
 *    description: Retorna todas as bandas.
 *    responses:
 *      200:
 *          description: OK
 *          content:
 *             application/json:
 *                 schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Band'
 *  post:
 *    tags:
 *      - Bandas
 *    summary: Criar uma banda
 *    description: Cria e retorna a banda.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Band'
 *    responses:
 *      201:
 *        description: Created
 *        content:
 *          application/json:
 *             schema:
 *              $ref: '#/components/schemas/Band'
 *      400:
 *        description: Bad Request
 */


const musicianController = new MusicianController();

bandRouter.get("/", bandController.read)

bandRouter.post("/", Ensure.bodyIsValid(createBand), bandController.create)


bandRouter.post("/:bandId/musicians", musicianController.create)


