const express =require("express")
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config()


const app = express()
app.use(cors())

const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB server")
        console.log("Server is running "+PORT)
    })
})
