import mongoose from "mongoose";
 const userschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    
        email:{
            type:String,
            require:true,
            unique:true
        }
    
 })
 export default mongoose.model("User",userschema)