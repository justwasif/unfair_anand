import {Router} from "express";
import { registerUser,loginuser } from "../controller/user.controller";

const router=Router();
router.route("signup").post(registerUser);
router.route("login").get(loginuser);