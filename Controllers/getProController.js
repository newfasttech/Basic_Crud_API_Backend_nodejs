import {product} from '../Models/productModel.js'


export const getProduct =async (req,res)=>{

    try {
        const getData = await product.find()
        const totalProuct = await product.countDocuments()
        if(getData){
            res.send({Products : getData,totalProduct : totalProuct})           
        }else{
            res.send(`<h1>Data is Empty..</h1>`)
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
    }

}