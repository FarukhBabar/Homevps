import mongoose from "mongoose";


let SmokinSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type :String,
        required:true
    } ,
    image:{
        type:String,
        
    },
    sales: { type: Number, default: 0 },
})

export default mongoose.model("Smokingessiontialproducts" , SmokinSchema)