import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { VerifyTokenMiddleware } from "../middlewares/VerifyTokenMiddleware";

export const userRouter = Router();

const userController = new UserController();

userRouter.post("/login", userController.login);

userRouter.get("/", VerifyTokenMiddleware.execute, userController.get);