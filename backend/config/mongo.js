import { mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connection = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongo connected");
  }catch(error){
    console.log("error connecting to mongo: ",error);
  }
}