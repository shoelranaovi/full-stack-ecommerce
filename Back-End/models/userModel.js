const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    propic:String
},
{
    timestamps:true
})

const usermodel=mongoose.model("user",userSchema)

module.exports=usermodel