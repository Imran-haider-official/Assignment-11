import mongoose from "mongoose";
import bycrpt from 'bcrypt' 
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
           
        },
        password: {
            type: String,
            required: true,
        },
    },
  
);

userSchema.pre("save", async function (next) {
    if(!this.isModified("password"))return next();

    try{
        this.password = await bycrpt.hash(this.password, saltRounds);
        next();
        
    }catch(err){
        next(err);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bycrpt.compare(candidatePassword, this.password);
}; 



const userModel = mongoose.model("User", userSchema);

export default userModel;

