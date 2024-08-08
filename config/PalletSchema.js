// import mongoose from "mongoose";


// let PaletSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     title:{
//         type:String,
//         required:true
//     },
//     price:{
//         type :String,
//         required:true
//     } ,
//     image:{
//         type:String,
        
//     }
// })

// export default mongoose.model("Palletproducts" , PaletSchema)


import mongoose from 'mongoose';
import slugify from 'slugify'; // You might need to install this package

const PaletSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    sales: { 
        type: Number, 
        default: 0 
    },
    slug: {
        type: String,
        unique: true,
        required: true,
        index: true // Optional: adds an index for faster queries on the slug field
    }
});

// Middleware to generate the slug before saving
PaletSchema.pre('save', function (next) {
    if (this.isModified('name') || this.isNew) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

export default mongoose.model('Palletproducts', PaletSchema);
