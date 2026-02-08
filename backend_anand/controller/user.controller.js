import { use } from "react";
import { User } from "../models/user.models";
import mongoose from "mongoose";
const registerUser=async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        return res.status(400).json({message:"all field are req"})

        

    }
    const existinguser=await User.findOne({email});
        if(existinguser){
            return res.status(4000).json({message:"user alreadyexist"});
        }
        
        const user=await User.create({
            username,
            email,
            password
        });
        res.status(200).json({
            message:"user created",
            userId:user.id
        })

}

const loginuser=async(req,res)=>{
    const {username,email,password}=req.body;
    if(!email){
        return res.status(404).json("email is req")

    }
    const user=await User.findOne({email})
    if(!user){
        return res.status(400).json("inncorrect")
    }
    const ispasswodvalid=await ispasswordCorrect(password);
    if(!ispasswodvalid){
        return res.json("galat password")
    }
    const loggedInUse=await user.findById(user._id)
    if(loggedInUse){
        return res.json("logged in");

    }
        
}
export {loginuser,registerUser}

   