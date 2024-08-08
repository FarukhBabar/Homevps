import GlovesSchema from '../../config/Cleaning/Gloves.js'
import MopsSchema from '../../config/Cleaning/Mops.js'
import SpongeSchema from '../../config/Cleaning/Sponge.js'
import BagslSchema from '../../config/Cleaning/Loundry4.js'
import BascketstSchema from '../../config/Cleaning/Basketst.js'
import LuggageSchema from '../../config/Cleaning/Luggage.js'
export const GlovesDAta = async(req,res)=>{
    let result = await GlovesSchema.find()
  return  res.send(result)
  }
  export const GlovesFree = async(req,res)=>{
  let result = await GlovesSchema.find()
  return  res.send(result)
  }
  export const GlovesDelitem = async (req,res)=>{
  let data = await GlovesSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Glovessingl =async (req, res) => {
    let result = await GlovesSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const MopsDAta = async(req,res)=>{
    let result = await MopsSchema.find()
  return  res.send(result)
  }
  export const MopsFree = async(req,res)=>{
  let result = await MopsSchema.find()
  return  res.send(result)
  }
  export const MopsDelitem = async (req,res)=>{
  let data = await MopsSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Mopssingl =async (req, res) => {
    let result = await MopsSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const SpongeDAta = async(req,res)=>{
  let result = await SpongeSchema.find()
return  res.send(result)
}
export const SpongeFree = async(req,res)=>{
let result = await SpongeSchema.find()
return  res.send(result)
}
export const SpongeDelitem = async (req,res)=>{
let data = await SpongeSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Spongesingl =async (req, res) => {
  let result = await SpongeSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BagslDAta = async(req,res)=>{
  let result = await BagslSchema.find()
return  res.send(result)
}
export const BagslFree = async(req,res)=>{
let result = await BagslSchema.find()
return  res.send(result)
}
export const BagslDelitem = async (req,res)=>{
let data = await BagslSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bagslsingl =async (req, res) => {
  let result = await BagslSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BasketstDAta = async(req,res)=>{
  let result = await BascketstSchema.find()
return  res.send(result)
}
export const BasketstFree = async(req,res)=>{
let result = await BascketstSchema.find()
return  res.send(result)
}
export const BasketstDelitem = async (req,res)=>{
let data = await BascketstSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Basketstsingl =async (req, res) => {
  let result = await BascketstSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const LuggageDAta = async(req,res)=>{
  let result = await LuggageSchema.find()
return  res.send(result)
}
export const LuggageFree = async(req,res)=>{
let result = await LuggageSchema.find()
return  res.send(result)
}
export const LuggageDelitem = async (req,res)=>{
let data = await LuggageSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Luggagesingl =async (req, res) => {
  let result = await LuggageSchema.findOne({_id: req.params.id})
  return res.send(result)
}