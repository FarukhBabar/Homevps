import GlasstumblerSchema from '../../config/Glassware/Glassdeco.js'
import GlassvassSchema from '../../config/Glassware/Glassvass.js'
import GlassstorageSchema from '../../config/Glassware/Glassstorage.js'
import GlasstablewareSchema from '../../config/Glassware/Glasstableware.js'
import PyrexSchema from '../../config/Glassware/Pyrex.js'
import KlinerSchema from '../../config/Glassware/Kliner.js'


export const Glasstumblerproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  GlasstumblerSchema({
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
export const Glasstumblerupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  GlasstumblerSchema.findOne({ _id: req.params.id });
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
export const Glasstumblersiglget=  async (req,res)=>{
    let result = await  GlasstumblerSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
export const Glassvassproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  GlassvassSchema({
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
export const Glassvassupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  GlassvassSchema.findOne({ _id: req.params.id });
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
export const Glassvasssiglget=  async (req,res)=>{
    let result = await  GlassvassSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Glassstorageproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  GlassstorageSchema({
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
export const Glassstorageupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  GlassstorageSchema.findOne({ _id: req.params.id });
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
export const Glassstoragesiglget=  async (req,res)=>{
    let result = await  GlassstorageSchema.findOne({_id:req.params.id})
    res.send(result)
  }
   
export const Glasstablewareproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  GlasstablewareSchema({
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
export const Glasstablewareupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  GlasstablewareSchema.findOne({ _id: req.params.id });
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
export const Glasstablewaresiglget=  async (req,res)=>{
    let result = await  GlasstablewareSchema.findOne({_id:req.params.id})
    res.send(result)
  }

export const Pyrexproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  PyrexSchema({
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
export const Pyrexupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  PyrexSchema.findOne({ _id: req.params.id });
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
export const Pyrexsiglget=  async (req,res)=>{
    let result = await  PyrexSchema.findOne({_id:req.params.id})
    res.send(result)
  }
  
export const Klinerproducts= async(req ,res)=>{
    try {
        let  {name , title , price } = req.body 
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const newuser = await new  KlinerSchema({
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
export const Klinerupl= async (req, res) => {
    try {
        let { name, title, price } = req.body;
        let profilepicturePath = '';
        if (req.file) {
            profilepicturePath = req.file.path;
        }
        const product = await  KlinerSchema.findOne({ _id: req.params.id });
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
export const Klinersiglget=  async (req,res)=>{
    let result = await  KlinerSchema.findOne({_id:req.params.id})
    res.send(result)
  }