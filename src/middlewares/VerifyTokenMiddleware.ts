import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";

export class VerifyTokenMiddleware {
    static execute( req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization;

        if(!token) {
            throw new AppError(403, "Token is required")
        }

        const secret = process.env.JWT_SECRETT as string

        jwt.verify(token, secret)

        res.locals.decode = jwt.decode(token)

        next();
    }
}