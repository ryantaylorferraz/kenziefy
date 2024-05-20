import jwt from "jsonwebtoken"
import { IUser } from "../interfaces/user.interface"

export class UserService {
    public login = () => {
        const token = jwt.sign({id: 1}, process.env.JWT_SECRETT as string, {expiresIn: "24"})

        return { accessToken: token }
    }

    public getUser = () => {
        const user: IUser = {id: 1, name: "Ryan", email: "ryan@hotmail.com"}

        return user;
    }
}