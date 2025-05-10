import express from "express";
import { login, register } from "../Controller/userController.js";

export const userRouter = express.Router();

userRouter.post('/login',login);
userRouter.post('/register',register);  