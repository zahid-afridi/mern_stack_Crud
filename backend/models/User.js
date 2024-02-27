import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        fathername:{
        type:String,
        required:true
    }, 
       email:{
        type:String,
        required:true
    },
         phone:{
        type:String,
        required:true
    }
},{timestamps:true})


const usermodel= mongoose.model('user',userSchema)

export default usermodel