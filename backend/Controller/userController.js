import { User } from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Email and Password is required" })
        }
        const user = await User.findOne({ email })

        if (!user) {
            res.status(400).json({ message: "No user Exist" })
        }

        const payload = {
            id: user._id
        }

        const token = jwt.sign(payload, process.env.JWT_KEY);

        res.cookie("token", token);

        res.status(200).json({ message: "Login Successful" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const register = async (req, res) => {

    try {
        const { email, password, role } = req.body;
        if (!email || !password) {
             return res.status(400).json({ message: "Email and Password are required" }); 
            }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists with this email" });
        }
        const newUser = new User({ email, password, role });
        await newUser.save();
        const payload = { id: newUser._id };
        const token = jwt.sign(payload, process.env.JWT_KEY);
         res.cookie("token", token, { httpOnly: true });
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error); res.status(500).json({ message: "Internal Server Error" });
    }
};


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (!users) {
            res.status(400).json({ message: "Users not found" });
        }
        res.status(200).json({ users })
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}