import ElectricalacessoriesSchema from '../../config/Electric/Electricalaccessories.js'
import DoorbellsSchema from '../../config/Electric/Doorbeels.js'
import IroneleSchema from '../../config/Electric/Ironele.js'
import EarephoneSchema from '../../config/Electric/Earephone.js'
import HairbodySchema from '../../config/Electric/Hairbody.js'


export const ElectricalaccDAta = async(req,res)=>{
  let result = await ElectricalacessoriesSchema.find()
return  res.send(result)
}
export const ElectricalaccFree = async(req,res)=>{
let result = await ElectricalacessoriesSchema.find()
return  res.send(result)
}
export const ElectricalaccDelitem = async (req,res)=>{
let data = await ElectricalacessoriesSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Electricalaccsingl =async (req, res) => {
  let result = await ElectricalacessoriesSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const DoorbeelsDAta = async(req,res)=>{
  let result = await DoorbellsSchema.find()
return  res.send(result)
}
export const DoorbeelsFree = async(req,res)=>{
let result = await DoorbellsSchema.find()
return  res.send(result)
}
export const DoorbeelsDelitem = async (req,res)=>{
let data = await DoorbellsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Doorbeelssingl =async (req, res) => {
  let result = await DoorbellsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const IroneleDAta = async(req,res)=>{
  let result = await IroneleSchema.find()
return  res.send(result)
}
export const IroneleFree = async(req,res)=>{
let result = await IroneleSchema.find()
return  res.send(result)
}
export const IroneleDelitem = async (req,res)=>{
let data = await IroneleSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Ironelesingl =async (req, res) => {
  let result = await IroneleSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const EarephoneDAta = async(req,res)=>{
  let result = await EarephoneSchema.find()
return  res.send(result)
}
export const EarephoneFree = async(req,res)=>{
let result = await EarephoneSchema.find()
return  res.send(result)
}
export const EarephoneDelitem = async (req,res)=>{
let data = await EarephoneSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Earephonesingl =async (req, res) => {
  let result = await EarephoneSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const HairbodyDAta = async(req,res)=>{
  let result = await HairbodySchema.find()
return  res.send(result)
}
export const HairbodyFree = async(req,res)=>{
let result = await HairbodySchema.find()
return  res.send(result)
}
export const HairbodyDelitem = async (req,res)=>{
let data = await HairbodySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Hairbodysingl =async (req, res) => {
  let result = await HairbodySchema.findOne({_id: req.params.id})
  return res.send(result)
}