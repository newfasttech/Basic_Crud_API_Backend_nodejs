import express from 'express'
import {addProduct} from '../Controllers/addProController.js'
import {deleteProduct} from '../Controllers/deleteProController.js'
import {updateProduct} from '../Controllers/updateProControllers.js'
import {getProduct} from '../Controllers/getProController.js'
export const router = express.Router()

router.get('/get-data',getProduct)
router.post('/add-data',addProduct)
router.put('/update-data/:id',updateProduct)
router.delete('/delete-data/:id',deleteProduct)