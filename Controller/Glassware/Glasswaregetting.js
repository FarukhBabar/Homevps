import GlasstumblerSchema from '../../config/Glassware/Glassdeco.js'
import GlassvassSchema from '../../config/Glassware/Glassvass.js'
import GlassstorageSchema from '../../config/Glassware/Glassstorage.js'
import GlasstablewareSchema from '../../config/Glassware/Glasstableware.js'
import PyrexSchema from '../../config/Glassware/Pyrex.js'
import KlinerSchema from '../../config/Glassware/Kliner.js'


export const GlasstumblerDAta = async(req,res)=>{
  let result = await GlasstumblerSchema.find()
return  res.send(result)
}
export const GlasstumblerFree = async(req,res)=>{
let result = await GlasstumblerSchema.find()
return  res.send(result)
}
export const GlasstumblerDelitem = async (req,res)=>{
let data = await GlasstumblerSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Glasstumblersingl =async (req, res) => {
  let result = await GlasstumblerSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const GlassvassDAta = async(req,res)=>{
  let result = await GlassvassSchema.find()
return  res.send(result)
}
export const GlassvassFree = async(req,res)=>{
let result = await GlassvassSchema.find()
return  res.send(result)
}
export const GlassvassDelitem = async (req,res)=>{
let data = await GlassvassSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Glassvasssingl =async (req, res) => {
  let result = await GlassvassSchema.findOne({_id: req.params.id})
  return res.send(result)
} 

export const GlassstorageDAta = async(req,res)=>{
  let result = await GlassstorageSchema.find()
return  res.send(result)
}
export const GlassstorageFree = async(req,res)=>{
let result = await GlassstorageSchema.find()
return  res.send(result)
}
export const GlassstorageDelitem = async (req,res)=>{
let data = await GlassstorageSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Glassstoragesingl =async (req, res) => {
  let result = await GlassstorageSchema.findOne({_id: req.params.id})
  return res.send(result)
} 

export const GlasstablewareDAta = async(req,res)=>{
  let result = await GlasstablewareSchema.find()
return  res.send(result)
}
export const GlasstablewareFree = async(req,res)=>{
let result = await GlasstablewareSchema.find()
return  res.send(result)
}
export const GlasstablewareDelitem = async (req,res)=>{
let data = await GlasstablewareSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Glasstablewaresingl =async (req, res) => {
  let result = await GlasstablewareSchema.findOne({_id: req.params.id})
  return res.send(result)
} 

export const PyrexDAta = async(req,res)=>{
  let result = await PyrexSchema.find()
return  res.send(result)
}
export const PyrexFree = async(req,res)=>{
let result = await PyrexSchema.find()
return  res.send(result)
}
export const PyrexDelitem = async (req,res)=>{
let data = await PyrexSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Pyrexsingl =async (req, res) => {
  let result = await PyrexSchema.findOne({_id: req.params.id})
  return res.send(result)
} 

export const KlinerDAta = async(req,res)=>{
  let result = await KlinerSchema.find()
return  res.send(result)
}
export const KlinerFree = async(req,res)=>{
let result = await KlinerSchema.find()
return  res.send(result)
}
export const KlinerDelitem = async (req,res)=>{
let data = await KlinerSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Klinersingl =async (req, res) => {
  let result = await KlinerSchema.findOne({_id: req.params.id})
  return res.send(result)
} 