import { NextFunction, Request, Response } from "express";
import { prisma } from "../database";

    class EnsureBandMiddleware {
    public idExist = async (req: Request, res: Response, next: NextFunction) => {
        const foundBand = await prisma.band.findFirst({
            where: { id: req.body.bandId }
        })

        if(!foundBand) {
            res.status(400).json({message: "Band not found"})
        }

        res.locals = { foundBand }

        next();
    }
}

export const EnsureBand = new EnsureBandMiddleware();