import { product } from "../Models/productModel.js"

export const deleteProduct = async (req,res)=>{
try {
    const {id} = req.params
    const exists = await product.findOne({_id : id})

    if(exists){
        await product.deleteOne({_id:id})
        res.status(200).json({message:"Product Deleted Sucessfully..."})
    }else{
            res.json({message: "product not Exists.."})
    }
    
} catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal Server Error."})

}
}