import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        tittle: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
       imageUrl: [
       {
        type:String,
        required:true,
       }

       ],
       ratings:[{
        type:Number,
        default:0,
       }],
       


    },
  
);



const productModel = mongoose.model("User", productSchema);

export default productModel;

