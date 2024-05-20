import { Router } from "express";
import { SessionController } from "../controllers/SessionController";
import { Ensure } from "../middlewares/EnsureMiddleware";
import { sessionSchema } from "../schemas/session.schema";
import { container } from "tsyringe";
import { SessionService } from "../services/SessionService";

export const SessionRouter = Router();

container.registerSingleton("SessionService", SessionService)
const sessionController = container.resolve(SessionController)

// const sessionController = new SessionController()

SessionRouter.post("/",  Ensure.bodyIsValid(sessionSchema), (req, res) => sessionController.login(req, res));