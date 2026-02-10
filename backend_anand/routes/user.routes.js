import {Router} from "express";
import { registerUser,loginuser } from "../controller/user.controller";

const router=Router();
router.post("/signup",registerUser)
router.post("/login",loginuser);
export default router;