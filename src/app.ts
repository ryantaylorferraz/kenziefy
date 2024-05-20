import "reflect-metadata";
import express from "express";
import "express-async-errors";
import "dotenv/config";
import helmet from "helmet";

import { handleErrors } from "./middlewares/HandleErrorMiddleware";
import { initRouters } from "./routes";
import { initJwtEnvVars } from "./configs";
import { initSwagger } from "./configs/swagger";

export const app = express();
app.use(helmet());

export const initApp = () => {
  app.use(express.json());
  initRouters(app);
  initJwtEnvVars();
  initSwagger(app);

  app.use(handleErrors);
};
