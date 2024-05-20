import { Router } from "express";
import { Ensure } from "../middlewares/EnsureMiddleware";
import { createAccount } from "../schemas/account.schema";
import { AccountController } from "../controllers/AccountController";
import { auth } from "../middlewares/AuthMiddleware";
import { container } from "tsyringe";
import { AccountService } from "../services/AccountService";

export const accountRouter = Router();

container.registerSingleton("AccountService", AccountService)
const accountController = container.resolve(AccountController)


accountRouter.post("/", Ensure.bodyIsValid(createAccount), accountController.create)

accountRouter.get("/", auth.isAuthenticated, auth.isAdmin, accountController.list) /*Correto */

accountRouter.get("/:accoundId", auth.isAuthenticated, auth.isAccountOwner, accountController.retrieve)
