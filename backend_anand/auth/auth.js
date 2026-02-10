import jwt from "jsonwebtoken";
import { User } from "../models/user.models";

const verifyJWT=async(req,res,next)=>{
    const token=req.cookie?.accessToken||req.header("Authorization")?.replace("Bearer","")
    if(!token){
        return res.status(400).json({message:"all field are req"})
    }
    const decoded=jwt.verify(token,process.env.ACCESSES_TOKEN);
    const user=await User.findById(decoded._id).select("-password -refreshToken")
    if(!user){
        return res.status(401,"invalid token");
    }
    req.user=user;
    next();

}
export {verifyJWT};