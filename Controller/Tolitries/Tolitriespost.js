import GiftsetsSchema from '../../config/Tolitries/Gift.js'
import HairSchema from '../../config/Tolitries/Hair.js'
import HandSchema from '../../config/Tolitries/Hand.js'
import HealthSchema from '../../config/Tolitries/Health.js'
import MouthSchema from '../../config/Tolitries/Mouth.js'
import PerfumesSchema from '../../config/Tolitries/Perfumes.js'
import SanitarySchema from '../../config/Tolitries/Sanitary.js'
import SavingSchema from '../../config/Tolitries/Saving.js'
import ShampoSchema from '../../config/Tolitries/Shampo.js'
import ShowerSchema from '../../config/Tolitries/Showergel.js'
import SkincareSchema from '../../config/Tolitries/Skincare.js'
import SoapbarrSchema from '../../config/Tolitries/Soapbar.js'
import ToothbrushSchema from '../../config/Tolitries/Toothbrush.js'
import ToothpastSchema from '../../config/Tolitries/Toothpast.js'
import DordantSchema from '../../config/Tolitries/Dordant.js'
import AfricaSchema from '../../config/Tolitries/Africa.js'

export const Giftproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  GiftsetsSchema({
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
export const Giftupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  GiftsetsSchema.findOne({ _id: req.params.id });
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
export const Giftsiglget=  async (req,res)=>{
    let result = await  GiftsetsSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
export const Hairproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  HairSchema({
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
export const Hairupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  HairSchema.findOne({ _id: req.params.id });
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
export const Hairsiglget=  async (req,res)=>{
    let result = await  HairSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Handproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  HandSchema({
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
export const Handupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  HandSchema.findOne({ _id: req.params.id });
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
export const Handsiglget=  async (req,res)=>{
    let result = await  HandSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
export const Healthproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  HealthSchema({
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
export const Healthupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  HealthSchema.findOne({ _id: req.params.id });
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
export const Healthsiglget=  async (req,res)=>{
    let result = await  HealthSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
export const Mouthproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  MouthSchema({
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
export const Mouthupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  MouthSchema.findOne({ _id: req.params.id });
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
export const Mouthsiglget=  async (req,res)=>{
    let result = await  MouthSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
export const Perfumesproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  PerfumesSchema({
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
export const Perfumesupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  PerfumesSchema.findOne({ _id: req.params.id });
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
export const Perfumessiglget=  async (req,res)=>{
    let result = await  PerfumesSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
export const Sanitaryproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SanitarySchema({
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
export const Sanitaryupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SanitarySchema.findOne({ _id: req.params.id });
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
export const Sanitarysiglget=  async (req,res)=>{
    let result = await  SanitarySchema.findOne({_id:req.params.id})
    res.send(result)
  }
     
export const Savingproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SavingSchema({
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
export const Savingupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SavingSchema.findOne({ _id: req.params.id });
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
export const Savingsiglget=  async (req,res)=>{
    let result = await  SavingSchema.findOne({_id:req.params.id})
    res.send(result)
  }
     
export const Shampoproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  ShampoSchema({
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
export const Shampoupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  ShampoSchema.findOne({ _id: req.params.id });
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
export const Shamposiglget=  async (req,res)=>{
    let result = await  ShampoSchema.findOne({_id:req.params.id})
    res.send(result)
  }
     
export const Showergelproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  ShowerSchema({
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
export const Showergelpl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  ShowerSchema.findOne({ _id: req.params.id });
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
export const Showergelsiglget=  async (req,res)=>{
    let result = await  ShowerSchema.findOne({_id:req.params.id})
    res.send(result)
  }
     
export const Skincareproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SkincareSchema({
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
export const Skincareupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SkincareSchema.findOne({ _id: req.params.id });
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
export const Skincaresiglget=  async (req,res)=>{
    let result = await  SkincareSchema.findOne({_id:req.params.id})
    res.send(result)
  }  
       
export const Soapbarproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SoapbarrSchema({
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
export const Soapbarupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SoapbarrSchema.findOne({ _id: req.params.id });
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
export const Soapbarsiglget=  async (req,res)=>{
    let result = await  SoapbarrSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
        
export const Toothbrushproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  ToothbrushSchema({
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
export const Toothbrushupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  ToothbrushSchema.findOne({ _id: req.params.id });
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
export const Toothbrushsiglget=  async (req,res)=>{
    let result = await  ToothbrushSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
     
export const Toothpastproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  ToothpastSchema({
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
export const Toothpastupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  ToothpastSchema.findOne({ _id: req.params.id });
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
export const Toothpastsiglget=  async (req,res)=>{
    let result = await  ToothpastSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
     
export const Dordantproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  DordantSchema({
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
export const Dordantupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  DordantSchema.findOne({ _id: req.params.id });
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
export const Dordantsiglget=  async (req,res)=>{
    let result = await  DordantSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
      
export const Africaproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  AfricaSchema({
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
export const Africaupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  AfricaSchema.findOne({ _id: req.params.id });
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
export const Africasiglget=  async (req,res)=>{
    let result = await  AfricaSchema.findOne({_id:req.params.id})
    res.send(result)
  } 