import CampingSchema from '../../config/Gardening/Camping.js'
import FurniturSchema from '../../config/Gardening/Furnitur.js'
import FertilizerSchema from '../../config/Gardening/Fertilizer.js'
import GiftwareSchema from '../../config/Gardening/Giftware.js'
import PlantersSchema from '../../config/Gardening/Planters.js'
import LighteningSchema from '../../config/Gardening/Lightening.js'
import GrowingSchema from '../../config/Gardening/Growing.js'
import ToolsSchema from '../../config/Gardening/Tools.js'
import WateringSchema from '../../config/Gardening/Watering.js'
import WinterfulesSchema from '../../config/Gardening/Winterfules.js'

export const CamingDAta = async(req,res)=>{
    let result = await CampingSchema.find()
  return  res.send(result)
  }
  export const CamingFree = async(req,res)=>{
  let result = await CampingSchema.find()
  return  res.send(result)
  }
  export const CamingDelitem = async (req,res)=>{
  let data = await CampingSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Camingsingl =async (req, res) => {
    let result = await CampingSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const fertilizerDAta = async(req,res)=>{
    let result = await FertilizerSchema.find()
  return  res.send(result)
  }
  export const fertilizerFree = async(req,res)=>{
  let result = await FertilizerSchema.find()
  return  res.send(result)
  }
  export const fertilizerDelitem = async (req,res)=>{
  let data = await FertilizerSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const fertilizersingl =async (req, res) => {
    let result = await FertilizerSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const furniturDAta = async(req,res)=>{
    let result = await FurniturSchema.find()
  return  res.send(result)
  }
  export const furniturFree = async(req,res)=>{
  let result = await FurniturSchema.find()
  return  res.send(result)
  }
  export const furniturDelitem = async (req,res)=>{
  let data = await FurniturSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const furnitursingl =async (req, res) => {
    let result = await FurniturSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const GiftwareDAta = async(req,res)=>{
    let result = await GiftwareSchema.find()
  return  res.send(result)
  }
  export const GiftwareFree = async(req,res)=>{
  let result = await GiftwareSchema.find()
  return  res.send(result)
  }
  export const GiftwareDelitem = async (req,res)=>{
  let data = await GiftwareSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Giftwaresingl =async (req, res) => {
    let result = await GiftwareSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const GrowingDAta = async(req,res)=>{
  let result = await GrowingSchema.find()
return  res.send(result)
}
export const GrowingFree = async(req,res)=>{
let result = await GrowingSchema.find()
return  res.send(result)
}
export const GrowingDelitem = async (req,res)=>{
let data = await GrowingSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Growingsingl =async (req, res) => {
  let result = await GrowingSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const LighteningDAta = async(req,res)=>{
  let result = await LighteningSchema.find()
return  res.send(result)
}
export const LighteningFree = async(req,res)=>{
let result = await LighteningSchema.find()
return  res.send(result)
}
export const LighteningDelitem = async (req,res)=>{
let data = await LighteningSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Lighteningsingl =async (req, res) => {
  let result = await LighteningSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const PlantersDAta = async(req,res)=>{
  let result = await PlantersSchema.find()
return  res.send(result)
}
export const PlantersFree = async(req,res)=>{
let result = await PlantersSchema.find()
return  res.send(result)
}
export const PlantersDelitem = async (req,res)=>{
let data = await PlantersSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Planterssingl =async (req, res) => {
  let result = await PlantersSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ToolsDAta = async(req,res)=>{
  let result = await ToolsSchema.find()
return  res.send(result)
}
export const ToolsFree = async(req,res)=>{
let result = await ToolsSchema.find()
return  res.send(result)
}
export const ToolsDelitem = async (req,res)=>{
let data = await ToolsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Toolssingl =async (req, res) => {
  let result = await ToolsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const WateringDAta = async(req,res)=>{
  let result = await WateringSchema.find()
return  res.send(result)
}
export const WateringFree = async(req,res)=>{
let result = await WateringSchema.find()
return  res.send(result)
}
export const WateringDelitem = async (req,res)=>{
let data = await WateringSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Wateringsingl =async (req, res) => {
  let result = await WateringSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const WinterfulesDAta = async(req,res)=>{
  let result = await WinterfulesSchema.find()
return  res.send(result)
}
export const WinterfulesFree = async(req,res)=>{
let result = await WinterfulesSchema.find()
return  res.send(result)
}
export const WinterfulesDelitem = async (req,res)=>{
let data = await WinterfulesSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Winterfulessingl =async (req, res) => {
  let result = await WinterfulesSchema.findOne({_id: req.params.id})
  return res.send(result)
}