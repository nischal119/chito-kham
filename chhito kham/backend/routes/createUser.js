import express from "express";
import { registerUser } from "./createUserService.js";
import { createUserValidator } from "./createUserValidator.js";
const router = express.Router();

export default router.post("/create/user", createUserValidator, registerUser);
