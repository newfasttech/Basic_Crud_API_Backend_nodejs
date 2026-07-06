import {product} from '../Models/productModel.js'

export const addProduct =async (req,res)=>{

    try {
        const {pname,price,stock,desc} = req.body;  

        const filedMiss = !pname || !price || !stock || !desc;
        if(filedMiss){
            return res.status(400).json({message:"Some field are missing.."});
            console.log("some fields missing...!");
         }
         await product.create({
            pname,price,stock,desc
         })


         return res.status(200).json({message : "Add Product Successfully... "})




    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
        
    }
}


