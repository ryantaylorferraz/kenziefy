import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";
import { JsonWebTokenError } from "jsonwebtoken";

class HandleErrorMiddleware {
    public static execute = (error: Error, req: Request, res: Response, next: NextFunction): Response => {
        if(error instanceof ZodError) {
            return res.status(400).json({error: error.errors})
        }

        if(error instanceof AppError){
            return res.status(error.statusCode).json({message:error.message})
        }

        if(error instanceof JsonWebTokenError){
            return res.status(401).json({message: error.message })
        }
        

        return res.status(500).json({error: "Internal Server Error"});

    }
}

export const handleErrors = HandleErrorMiddleware.execute;