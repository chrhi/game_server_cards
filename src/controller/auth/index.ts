import type {User} from "../../model/types/types"
import { Request , Response } from "express";
import { UserModel } from "../../model/schema/User";
import bcrypt from "bcrypt"
import {createToken} from "../../lib/JWT"




export const logIn = async ( req:Request , res:Response) =>{
    //getting the information from the the body of the request
    const {email , password} = req.body;

       // read cookies
       //console.log(req.cookies) 
    let options = {
        maxAge: (1000 * 60 * 15) * 8, // would expire after 2 hours
        httpOnly: false, // The cookie only accessible by the web server
    
    }

    try{
      //lokking for the user if we can found hin in data base
      const user = await UserModel.findOne({ email }).exec();
     //if user not exist than return status 400
     if (!user) return res.status(400).json({ msg: "User not exist" })

     //compairing using bycrypr
     bcrypt.compare(password, user.password, (err:Error | undefined , data:any) => {
        //if error than throw error
        if (err) throw err

        //if both match than you can do anything
        if (data) {
            
            //in here we want to send cookies to the client
            const token:string = createToken(user)
            console.log(token)
            return res.cookie('jwt-token', token , options) // options is optional

           
        } else {
            return res.status(401).json({ msg: "Invalid credencial" })
        }

    })

        
      
     
    }catch(err){
        console.log("the email may be wrong")
        console.log(err)
    }
   

}