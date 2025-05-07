import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Supervisor','Admin'],
        default:'Supervisor'
    }
},{timestamps:true});


userSchema.pre("save",async function (next){
    try{
        if(!this.isModified("password")){
            return next();
        }

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);

        return next();

    }catch(error){
        return next(error);
    }
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

export const User = mongoose.model("User",userSchema);