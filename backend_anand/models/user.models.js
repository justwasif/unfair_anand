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

user.methods.ispasswordCorrect=async function (password) {
    return await bcrypt.compare(password,this.password);
    
}
user.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            username:this.username,
            email:this.email
        },
        process.env.ACCESSES_TOKEN,
        {
            expiresIn:1d
        }
        
    )
}

user.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN,
        {
            expiresIn:2d
        }
    )
}
export const User=mongoose.model("User",user);