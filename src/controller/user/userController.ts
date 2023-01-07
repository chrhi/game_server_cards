import { Request , response, Response } from "express";
import type { User } from "../../model/types/types";
import { UserModel } from "../../model/schema/User";
import bcrypt from "bcrypt"




export const createUser =async ( req:Request , res:Response) =>{
   const {name , password , email}:User = req.body
   if(!name || !password || !email){
    return  res.json({error:"all fields are required"}).status(400)
   }
    //chech for deblicate
  const dublicate = await UserModel.findOne({ email }).lean().exec();
  if (dublicate) {
    return res
      .status(409)
      .json({ message: " there is a user with the same name" });
  }
  //hash password
  const hashedPassword = await bcrypt.hash(password, 10); // salt rounds

  //at this part the user is created
  const user = await UserModel.create({name, password:hashedPassword, email})

    return res.status(200).json({success:`new user created ${user.name}`})

}


export const updateUser = async ( req:Request , res:Response) =>{
    //TODO: update user to the data base
}


export const selecteUser = async ( req:Request , res:Response) =>{
    //TODO: getting a user from the data base
}

