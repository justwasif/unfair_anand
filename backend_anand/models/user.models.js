import mongoose, { Schema } from "mongoose";
import bcrypt from "brcypt"

const user=new Schema({
    username:
    {
        type:String,
        require:true
    },
    
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    }

})
console.log(user.password)



user.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);

    next();
})
console.log(user.password)
export const User=mongoose.model("User",user);