import type { User } from "../model/types/types"
import {sign , verify} from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const createToken  = (user: User) =>{
    const token = sign(user, process.env.JWT_SECRET_KEY!)

    return token
}


export const validateToken = (token: string) =>{
    const verified = verify(token, process.env.JWT_SECRET_KEY!);
    if(verified){
        return true
    }
    return false
}