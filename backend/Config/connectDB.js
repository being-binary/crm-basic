import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const connectdb = async ()=>{
    try{
      await mongoose.connect(process.env.EXPRESS_MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/crm_amarjeet');
      console.log("Mongodb connected")
    }catch(error){
        console.log(error)
        process.exit(1);
    }
}

