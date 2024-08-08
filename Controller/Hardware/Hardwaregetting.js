import HotwaterSchema from '../../config/Hardware/Hotwater.js'
import PicnicSchema from '../../config/Hardware/Picnic.js'
import SportsbottSchema from '../../config/Hardware/Sportsbott.js'
import UmbrellaSchema from '../../config/Hardware/Umbrella.js'
import Umbrella2Schema from '../../config/Hardware/Toweaccess.js'
import CrokerySchema from '../../config/Hardware/Crokery.js'
import GlassdecoSchema from '../../config/Hardware/Glassdeco.js'
export const HotwaterrDAta = async(req,res)=>{
  let result = await HotwaterSchema.find()
return  res.send(result)
}
export const HotwaterrFree = async(req,res)=>{
let result = await HotwaterSchema.find()
return  res.send(result)
}
export const HotwaterrDelitem = async (req,res)=>{
let data = await HotwaterSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Hotwaterrsingl =async (req, res) => {
  let result = await HotwaterSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const PicnicDAta = async(req,res)=>{
  let result = await PicnicSchema.find()
return  res.send(result)
}
export const PicnicFree = async(req,res)=>{
let result = await PicnicSchema.find()
return  res.send(result)
}
export const PicnicDelitem = async (req,res)=>{
let data = await PicnicSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Picnicsingl =async (req, res) => {
  let result = await PicnicSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SportsbottDAta = async(req,res)=>{
  let result = await SportsbottSchema.find()
return  res.send(result)
}
export const SportsbottFree = async(req,res)=>{
let result = await SportsbottSchema.find()
return  res.send(result)
}
export const SportsbottDelitem = async (req,res)=>{
let data = await SportsbottSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Sportsbottsingl =async (req, res) => {
  let result = await SportsbottSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const UmbrellaDAta = async(req,res)=>{
  let result = await UmbrellaSchema.find()
return  res.send(result)
}
export const UmbrellaFree = async(req,res)=>{
let result = await UmbrellaSchema.find()
return  res.send(result)
}
export const UmbrellaDelitem = async (req,res)=>{
let data = await UmbrellaSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Umbrellasingl =async (req, res) => {
  let result = await UmbrellaSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const Umbrella2DAta = async(req,res)=>{
  let result = await Umbrella2Schema.find()
return  res.send(result)
}
export const Umbrella2Free = async(req,res)=>{
let result = await Umbrella2Schema.find()
return  res.send(result)
}
export const Umbrella2Delitem = async (req,res)=>{
let data = await Umbrella2Schema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Umbrella2singl =async (req, res) => {
  let result = await Umbrella2Schema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CrokeryDAta = async(req,res)=>{
  let result = await CrokerySchema.find()
return  res.send(result)
}
export const CrokeryFree = async(req,res)=>{
let result = await CrokerySchema.find()
return  res.send(result)
}
export const CrokeryDelitem = async (req,res)=>{
let data = await CrokerySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Crokerysingl =async (req, res) => {
  let result = await CrokerySchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const GlassdecoDAta = async(req,res)=>{
  let result = await GlassdecoSchema.find()
return  res.send(result)
}
export const GlassdecoFree = async(req,res)=>{
let result = await GlassdecoSchema.find()
return  res.send(result)
}
export const GlassdecoDelitem = async (req,res)=>{
let data = await GlassdecoSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Glassdecosingl =async (req, res) => {
  let result = await GlassdecoSchema.findOne({_id: req.params.id})
  return res.send(result)
}