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
export const GiftDAta = async(req,res)=>{
    let result = await GiftsetsSchema.find()
  return  res.send(result)
  }
  export const GiftFree = async(req,res)=>{
  let result = await GiftsetsSchema.find()
  return  res.send(result)
  }
  export const GiftDelitem = async (req,res)=>{
  let data = await GiftsetsSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Giftsingl =async (req, res) => {
    let result = await GiftsetsSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const HairDAta = async(req,res)=>{
    let result = await HairSchema.find()
  return  res.send(result)
  }
  export const HairFree = async(req,res)=>{
  let result = await HairSchema.find()
  return  res.send(result)
  }
  export const HairDelitem = async (req,res)=>{
  let data = await HairSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Hairsingl =async (req, res) => {
    let result = await HairSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const HandDAta = async(req,res)=>{
    let result = await HandSchema.find()
  return  res.send(result)
  }
  export const HandFree = async(req,res)=>{
  let result = await HandSchema.find()
  return  res.send(result)
  }
  export const HandDelitem = async (req,res)=>{
  let data = await HandSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Handsingl =async (req, res) => {
    let result = await HandSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const HealthDAta = async(req,res)=>{
  let result = await HealthSchema.find()
return  res.send(result)
}
export const HealthFree = async(req,res)=>{
let result = await HealthSchema.find()
return  res.send(result)
}
export const HealthDelitem = async (req,res)=>{
let data = await HealthSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Healthsingl =async (req, res) => {
  let result = await HealthSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const MouthDAta = async(req,res)=>{
  let result = await MouthSchema.find()
return  res.send(result)
}
export const MouthFree = async(req,res)=>{
let result = await MouthSchema.find()
return  res.send(result)
}
export const MouthDelitem = async (req,res)=>{
let data = await MouthSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Mouthsingl =async (req, res) => {
  let result = await MouthSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const PerfumesDAta = async(req,res)=>{
  let result = await PerfumesSchema.find()
return  res.send(result)
}
export const PerfumesFree = async(req,res)=>{
let result = await PerfumesSchema.find()
return  res.send(result)
}
export const PerfumesDelitem = async (req,res)=>{
let data = await PerfumesSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Perfumessingl =async (req, res) => {
  let result = await PerfumesSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SanitaryDAta = async(req,res)=>{
  let result = await SanitarySchema.find()
return  res.send(result)
}
export const SanitaryFree = async(req,res)=>{
let result = await SanitarySchema.find()
return  res.send(result)
}
export const SanitaryDelitem = async (req,res)=>{
let data = await SanitarySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Sanitarysingl =async (req, res) => {
  let result = await SanitarySchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SavingDAta = async(req,res)=>{
  let result = await SavingSchema.find()
return  res.send(result)
}
export const SavingFree = async(req,res)=>{
let result = await SavingSchema.find()
return  res.send(result)
}
export const SavingDelitem = async (req,res)=>{
let data = await SavingSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Savingsingl =async (req, res) => {
  let result = await SavingSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ShampoDAta = async(req,res)=>{
  let result = await ShampoSchema.find()
return  res.send(result)
}
export const ShampoFree = async(req,res)=>{
let result = await ShampoSchema.find()
return  res.send(result)
}
export const ShampoDelitem = async (req,res)=>{
let data = await ShampoSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Shamposingl =async (req, res) => {
  let result = await ShampoSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ShowergelDAta = async(req,res)=>{
  let result = await ShowerSchema.find()
return  res.send(result)
}
export const ShowergelFree = async(req,res)=>{
let result = await ShowerSchema.find()
return  res.send(result)
}
export const ShowergelDelitem = async (req,res)=>{
let data = await ShowerSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Showergelsingl =async (req, res) => {
  let result = await ShowerSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SkincareDAta = async(req,res)=>{
  let result = await SkincareSchema.find()
return  res.send(result)
}
export const SkincareFree = async(req,res)=>{
let result = await SkincareSchema.find()
return  res.send(result)
}
export const SkincareDelitem = async (req,res)=>{
let data = await SkincareSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Skincaresingl =async (req, res) => {
  let result = await SkincareSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SoapbarDAta = async(req,res)=>{
  let result = await SoapbarrSchema.find()
return  res.send(result)
}
export const SoapbarFree = async(req,res)=>{
let result = await SoapbarrSchema.find()
return  res.send(result)
}
export const SoapbarDelitem = async (req,res)=>{
let data = await SoapbarrSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Soapbarsingl =async (req, res) => {
  let result = await SoapbarrSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ToothbrushDAta = async(req,res)=>{
  let result = await ToothbrushSchema.find()
return  res.send(result)
}
export const ToothbrushFree = async(req,res)=>{
let result = await ToothbrushSchema.find()
return  res.send(result)
}
export const ToothbrushDelitem = async (req,res)=>{
let data = await ToothbrushSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Toothbrushsingl =async (req, res) => {
  let result = await ToothbrushSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ToothpastDAta = async(req,res)=>{
  let result = await ToothpastSchema.find()
return  res.send(result)
}
export const ToothpastFree = async(req,res)=>{
let result = await ToothpastSchema.find()
return  res.send(result)
}
export const ToothpastDelitem = async (req,res)=>{
let data = await ToothpastSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Toothpastsingl =async (req, res) => {
  let result = await ToothpastSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const DordantDAta = async(req,res)=>{
  let result = await DordantSchema.find()
return  res.send(result)
}
export const DordantFree = async(req,res)=>{
let result = await DordantSchema.find()
return  res.send(result)
}
export const DordantDelitem = async (req,res)=>{
let data = await DordantSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Dordantsingl =async (req, res) => {
  let result = await DordantSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const AfricaDAta = async(req,res)=>{
  let result = await AfricaSchema.find()
return  res.send(result)
}
export const AfricaFree = async(req,res)=>{
let result = await AfricaSchema.find()
return  res.send(result)
}
export const AfricaDelitem = async (req,res)=>{
let data = await AfricaSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Africasingl =async (req, res) => {
  let result = await AfricaSchema.findOne({_id: req.params.id})
  return res.send(result)
}