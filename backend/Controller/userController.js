import { User } from "../Models/userModel.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Email and Password is required" })
        }
        const user = await User.findOne({email})

        if(!user){
            res.status(400).json({message:"No user Exist"})
        }
        
        const payload = {
            id:user._id
        }

        const token = jwt.sign(payload,process.env.JWT_SECURE);

        res.cookie("token",token);

        res.status(200).json({message:"Login Successful"});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
    } 
}

// export const register = async (req,res)=>{
//     try {
//         const {email,password} = req.body;

//         if(!u)
//     } catch (error) {
        
//     }
// }