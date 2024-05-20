import { Express } from "express"
import { bandRouter } from "./band.router";
import { albumRouter } from "./album.router";
import { trackRouter } from "./track.router";
import { accountRouter } from "./account.router";
import { SessionRouter } from "./session.router";
export const initRouters = (app: Express) => {
    app.use("/api/bands", bandRouter);
    app.use("/api/album", albumRouter);
    app.use("/api/tracks", trackRouter);
    app.use("/api/accounts", accountRouter)
    app.use("/api/login", SessionRouter)
}