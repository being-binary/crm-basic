import express from "express";
import { login } from "../Controller/userController.js";

export const userRouter = express.Router();

userRouter.post('/login',login);