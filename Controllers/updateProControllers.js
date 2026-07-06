import { product } from "../Models/productModel.js"

export const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params

        const exists = await product.findOne({_id : id})

        
        if(exists){

            const data =req.body
            await product.findByIdAndUpdate(id,data)
            res.status(200).json({
                 message: "Product Updated Successfully"
            })
        }else{
            res.json({message: "product not Exists.."})
        }
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error."})
    }

}