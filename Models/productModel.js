import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        pname : {
            type:String,
            required:true
        },
        price :{
            type:Number,
            required:true
        },
        stock:{
            type:Number,
            required:true
        },
        desc:{
            type:String,
            required:true
        }
    }
)


export const product = mongoose.model('product',productSchema)