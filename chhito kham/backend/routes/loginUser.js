import express from "express";
import { loginUser } from "./loginuserService.js";
import { loginUserValidator } from "./loginUserValidator.js";
const router = express.Router();

export default router.post("/login/user", loginUserValidator, loginUser);
