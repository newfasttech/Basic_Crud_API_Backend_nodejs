import express from 'express'
import dotenv from 'dotenv'
import {router} from './Routes/crudRoute.js'
import {connectDB} from './DB/connectDB.js'
const app = express()
dotenv.config()
app.use(express.json())


// connectDB
connectDB()

// routes 
app.use('/api',router)





app.listen(process.env.App_port,()=>{console.log(`Listing on port http://localhost:${process.env.App_port}/api/get-data`)})


