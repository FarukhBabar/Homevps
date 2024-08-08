import LynwoodSchema from '../../config/Diy/Lynwood.js'
import OxfordSchema from '../../config/Diy/Oxford.js'
import PestcontSchema from '../../config/Diy/Pestcont.js'
import PlasplugSchema from '../../config/Diy/Plasplug.js'
import PrimacarSchema from '../../config/Diy/Primacar.js'
import RolsonSchema from '../../config/Diy/Rolson.js'
import RonsealSchema from '../../config/Diy/Ronseal.js'
import RustinsSchema from '../../config/Diy/Rustins.js'
import SecuritSchema from '../../config/Diy/Securit.js'
import SecrupSchema from '../../config/Diy/Secrup.js'
import ShortageSchema from '../../config/Diy/Shortage.js'
import SoudalSchema from '../../config/Diy/Soudal.js'
import StarpackSchema from '../../config/Diy/Starpack.js'
import SterlingSchema from '../../config/Diy/Sterling.js'
import TableauSchema from '../../config/Diy/Tableau.js'
import TricycleSchema from '../../config/Diy/Tricycle.js'
import UltratapeSchema from '../../config/Diy/Ultratape.js'
import VacuumSchema from '../../config/Diy/Vacuum.js'
import VelcroSchema from '../../config/Diy/Velcro.js'
import VfmpaintSchema from '../../config/Diy/Vfmpaint.js'
import WernerSchema from '../../config/Diy/Werner.js'
import YelelockSchema from '../../config/Diy/Yelelock.js'
import Wd40Schema from '../../config/Diy/Wd40.js'
import AntiquxSchema from '../../config/Diy/Antiqux.js'
import UniconSchema from '../../config/Diy/Unicon.js'
import AmtechSchema from '../../config/Diy/Amtech.js'

export const Lynwoodproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  LynwoodSchema({
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
export const Lynwoodupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  LynwoodSchema.findOne({ _id: req.params.id });
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
export const Lynwoodsiglget=  async (req,res)=>{
    let result = await  LynwoodSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
  
export const Oxfordproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  OxfordSchema({
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
export const Oxfordupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  OxfordSchema.findOne({ _id: req.params.id });
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
export const Oxfordsiglget=  async (req,res)=>{
    let result = await  OxfordSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
   
export const Pestcoproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  PestcontSchema({
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
export const Pestcoupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  PestcontSchema.findOne({ _id: req.params.id });
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
export const Pestcosiglget=  async (req,res)=>{
    let result = await  PestcontSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
    
export const Plasplugproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  PlasplugSchema({
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
export const Plasplugupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  PlasplugSchema.findOne({ _id: req.params.id });
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
export const Plasplugsiglget=  async (req,res)=>{
    let result = await  PlasplugSchema.findOne({_id:req.params.id})
    res.send(result)
  } 
    
export const Primacarproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  PrimacarSchema({
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
export const Primacarupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  PrimacarSchema.findOne({ _id: req.params.id });
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
export const Primacarsiglget=  async (req,res)=>{
    let result = await  PrimacarSchema.findOne({_id:req.params.id})
    res.send(result)
  } 

  export const Rolsonproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  RolsonSchema({
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
export const Rolsonupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  RolsonSchema.findOne({ _id: req.params.id });
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
export const Rolsonsiglget=  async (req,res)=>{
    let result = await  RolsonSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Ronsealproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  RonsealSchema({
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
export const Ronsealupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  RonsealSchema.findOne({ _id: req.params.id });
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
export const Ronsealsiglget=  async (req,res)=>{
    let result = await  RonsealSchema.findOne({_id:req.params.id})
    res.send(result)
  } 

  export const Rustinsproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  RustinsSchema({
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
export const Rustinsupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  RustinsSchema.findOne({ _id: req.params.id });
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
export const Rustinssiglget=  async (req,res)=>{
    let result = await  RustinsSchema.findOne({_id:req.params.id})
    res.send(result)
  }

  export const Securitproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SecuritSchema({
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
export const Securitupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SecuritSchema.findOne({ _id: req.params.id });
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
export const Securitsiglget=  async (req,res)=>{
    let result = await  SecuritSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Secrupproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SecrupSchema({
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
export const Secrupupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SecrupSchema.findOne({ _id: req.params.id });
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
export const Secrupsiglget=  async (req,res)=>{
    let result = await  SecrupSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
  export const Shortageproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  ShortageSchema({
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
export const Shortageupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  ShortageSchema.findOne({ _id: req.params.id });
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
export const Shortagesiglget=  async (req,res)=>{
    let result = await  ShortageSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
  export const Soudalproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SoudalSchema({
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
export const Soudalupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SoudalSchema.findOne({ _id: req.params.id });
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
export const Soudalsiglget=  async (req,res)=>{
    let result = await  SoudalSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
  export const Starpackproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  StarpackSchema({
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
export const Starpackupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  StarpackSchema.findOne({ _id: req.params.id });
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
export const Starpacksiglget=  async (req,res)=>{
    let result = await  StarpackSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Sterlingproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  SterlingSchema({
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
export const Sterlingupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  SterlingSchema.findOne({ _id: req.params.id });
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
export const Sterlingsiglget=  async (req,res)=>{
    let result = await  SterlingSchema.findOne({_id:req.params.id})
    res.send(result)
  }

  export const tableauproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  TableauSchema({
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
export const tableauupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  TableauSchema.findOne({ _id: req.params.id });
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
export const tableausiglget=  async (req,res)=>{
    let result = await  TableauSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const tricycleproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  TricycleSchema({
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
export const tricycleupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  TricycleSchema.findOne({ _id: req.params.id });
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
export const tricyclesiglget=  async (req,res)=>{
    let result = await  TricycleSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
  export const Ultratapeproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  UltratapeSchema({
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
export const Ultratapeupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  UltratapeSchema.findOne({ _id: req.params.id });
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
export const Ultratapesiglget=  async (req,res)=>{
    let result = await  UltratapeSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
  export const Vacuumproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  VacuumSchema({
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
export const Vacuumupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  VacuumSchema.findOne({ _id: req.params.id });
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
export const Vacuumsiglget=  async (req,res)=>{
    let result = await  VacuumSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Velcroproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  VelcroSchema({
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
export const Velcroupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  VelcroSchema.findOne({ _id: req.params.id });
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
export const Velcrosiglget=  async (req,res)=>{
    let result = await  VelcroSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
  export const Vfmpaintproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  VfmpaintSchema({
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
export const Vfmpaintupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  VfmpaintSchema.findOne({ _id: req.params.id });
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
export const Vfmpaintsiglget=  async (req,res)=>{
    let result = await  VfmpaintSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
  export const Wd40products= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  Wd40Schema({
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
export const Wd40upl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  Wd40Schema.findOne({ _id: req.params.id });
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
export const Wd40siglget=  async (req,res)=>{
    let result = await  Wd40Schema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Wernerproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  WernerSchema({
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
export const Wernerupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  WernerSchema.findOne({ _id: req.params.id });
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
export const Wernersiglget=  async (req,res)=>{
    let result = await  WernerSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Yelelockproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  YelelockSchema({
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
export const Yelelockupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  YelelockSchema.findOne({ _id: req.params.id });
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
export const Yelelocksiglget=  async (req,res)=>{
    let result = await  YelelockSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
  export const Uniconproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  UniconSchema({
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
export const Uniconupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  UniconSchema.findOne({ _id: req.params.id });
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
export const Uniconsiglget=  async (req,res)=>{
    let result = await  UniconSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
  export const Amtechproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  AmtechSchema({
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
export const Amtechupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  AmtechSchema.findOne({ _id: req.params.id });
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
export const Amtechsiglget=  async (req,res)=>{
    let result = await  AmtechSchema.findOne({_id:req.params.id})
    res.send(result)
  }
    
  export const Antiquxproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  AntiquxSchema({
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
export const Antiquxupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  AntiquxSchema.findOne({ _id: req.params.id });
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
export const Antiquxsiglget=  async (req,res)=>{
    let result = await  AntiquxSchema.findOne({_id:req.params.id})
    res.send(result)
  }