import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";
import { prisma } from "../database";

    class AuthMiddleware {

    public isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {

        const { authorization } = req.headers;

        if (!authorization) {
            throw new AppError(401, "Missing bearer token")
        }

        const [_, token] = authorization.split(" ");

        const secret = process.env.JWT_SECRETT!;
        const jwtPayload = verify(token, secret)
        
        res.locals = {
            ...res.locals,
            decoded: jwtPayload,
          };
          
          return next();
          
        }
        
        public isAccountOwner = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            const {decoded} = res.locals;
            const { accoundId } = req.params;

            if(decoded.sub !== accoundId) {
                throw new AppError(403, "You dont have permission to perform this action")
            }
            
            const account = await prisma.account.findFirst({
                where: {id: Number(decoded.sub)}
            });
            
            res.locals = { ...res.locals, account}

            
            return next();
        }

    public isAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { decoded } = res.locals;
        console.log(decoded);

        if(decoded.role !== "ADMIN") {
            throw new AppError(403, "You dont have permission to perform this action")
        }

        next();
    }
    
}

export const auth = new AuthMiddleware()