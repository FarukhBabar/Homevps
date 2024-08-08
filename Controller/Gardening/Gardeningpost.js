import CampingSchema from '../../config/Gardening/Camping.js'
import FertilizerSchema from '../../config/Gardening/Fertilizer.js'
import FurniturSchema from '../../config/Gardening/Furnitur.js'
import GiftwareSchema from '../../config/Gardening/Giftware.js'
import PlantersSchema from '../../config/Gardening/Planters.js'
import LighteningSchema from '../../config/Gardening/Lightening.js'
import GrowingSchema from '../../config/Gardening/Growing.js'
import ToolsSchema from '../../config/Gardening/Tools.js'
import WateringSchema from '../../config/Gardening/Watering.js'
import WinterfulesSchema from '../../config/Gardening/Winterfules.js'

export const Camingproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  CampingSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Camingupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  CampingSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Camingsiglget=  async (req,res)=>{
    let result = await  CampingSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
export const fertilizerproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  FertilizerSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const fertilizerupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  FertilizerSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const fertilizersiglget=  async (req,res)=>{
    let result = await  FertilizerSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
export const Furniturproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  FurniturSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Furniturupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  FurniturSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Furnitursiglget=  async (req,res)=>{
    let result = await  FurniturSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Giftwareproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  GiftwareSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Giftwareupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  GiftwareSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Giftwaresiglget=  async (req,res)=>{
    let result = await  GiftwareSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Growingproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  GrowingSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Growingupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  GrowingSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Growingsiglget=  async (req,res)=>{
    let result = await  GrowingSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Lighteningproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  LighteningSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Lighteningupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  LighteningSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Lighteningsiglget=  async (req,res)=>{
    let result = await  LighteningSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Plantersproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  PlantersSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Plantersupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  PlantersSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Planterssiglget=  async (req,res)=>{
    let result = await  PlantersSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Toolsproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  ToolsSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Toolsupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  ToolsSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Toolssiglget=  async (req,res)=>{
    let result = await  ToolsSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Wateringproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  WateringSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Wateringupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  WateringSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Wateringsiglget=  async (req,res)=>{
    let result = await  WateringSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Winterfulesproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  WinterfulesSchema({
            name,
            title,
            price,
            image: profilepicturePath,
        }).save() 

       
        if(newuser){
            return res.status(200).send({Message:"product added Successfully"})
        }else{
            console.log(error)
        }
    } catch (error) {
        
    }
}
export const Winterfulesupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  WinterfulesSchema.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        product.name = name || product.name;
        product.title = title || product.title;
        product.price = price || product.price;
        if (profilepicturePath) {
            product.image = profilepicturePath;
        }
        const updatedProduct = await product.save();
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}
export const Winterfulessiglget=  async (req,res)=>{
    let result = await  WinterfulesSchema.findOne({_id:req.params.id})
    res.send(result)
  }