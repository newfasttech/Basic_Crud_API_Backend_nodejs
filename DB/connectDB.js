import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()



export const connectDB = async()=>{
try{
    await mongoose.connect(process.env.db_Uri)
    console.log('Database connected...');

}catch(err){
    console.log(err);
    
}
}