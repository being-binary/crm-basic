import jwt from "jsonwebtoken";
import { User } from "../Models/userModel";

const isAuth = async (req,res,next)=>{
    try {
        const token = req.cookies;

        const isverify = jwt.verify(token,process.env.JWT_SECURE);

        if(!isverify){
           return res.status(400).json({message:"Unauthorize to access the details"});
        }
        const userid = isverify._id;
        const user = await User.findById({_id:userid});
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}

const isAdmin = async (req,res,next)=>{
    try {
        if(!(req.user.role == 'Admin')){
            return next(error);
        }
        next();
    } catch (error) {
        next(error)
    }
}