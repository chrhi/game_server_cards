import mongoose, { Schema } from 'mongoose'

import {User} from "../types/types"

// Schema
const schema:mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User> = new Schema<User>({
  
  password:{
    type: String,
    required: true
  },
  name: { 
     type: String,
     required: true
     },
  email: { 
    type: String, 
    required: true 
   },
   acount:{
    type: String,
    unique: true,
    
   }
   
 
});

export const UserModel = mongoose.model('User', schema);