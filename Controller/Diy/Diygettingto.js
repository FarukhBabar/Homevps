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
export const LynwoodDAta = async(req,res)=>{
    let result = await LynwoodSchema.find()
  return  res.send(result)
  }
  export const LynwoodFree = async(req,res)=>{
  let result = await LynwoodSchema.find()
  return  res.send(result)
  }
  export const LynwoodDelitem = async (req,res)=>{
  let data = await LynwoodSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Lynwoodsingl =async (req, res) => {
    let result = await LynwoodSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const OxfordDAta = async(req,res)=>{
    let result = await OxfordSchema.find()
  return  res.send(result)
  }
  export const OxfordFree = async(req,res)=>{
  let result = await OxfordSchema.find()
  return  res.send(result)
  }
  export const OxfordDelitem = async (req,res)=>{
  let data = await OxfordSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Oxfordsingl =async (req, res) => {
    let result = await OxfordSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const PestcoDAta = async(req,res)=>{
    let result = await PestcontSchema.find()
  return  res.send(result)
  }
  export const PestcoFree = async(req,res)=>{
  let result = await PestcontSchema.find()
  return  res.send(result)
  }
  export const PestcoDelitem = async (req,res)=>{
  let data = await PestcontSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Pestcontsingl =async (req, res) => {
    let result = await PestcontSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const PlasplugDAta = async(req,res)=>{
  let result = await PlasplugSchema.find()
return  res.send(result)
}
export const PlasplugFree = async(req,res)=>{
let result = await PlasplugSchema.find()
return  res.send(result)
}
export const PlasplugDelitem = async (req,res)=>{
let data = await PlasplugSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Plasplugsingl =async (req, res) => {
  let result = await PlasplugSchema.findOne({_id: req.params.id})
  return res.send(result)
}
 
export const PrimacarDAta = async(req,res)=>{
  let result = await PrimacarSchema.find()
return  res.send(result)
}
export const PrimacarFree = async(req,res)=>{
let result = await PrimacarSchema.find()
return  res.send(result)
}
export const PrimacarDelitem = async (req,res)=>{
let data = await PrimacarSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Primacarsingl =async (req, res) => {
  let result = await PrimacarSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const RolsonDAta = async(req,res)=>{
  let result = await RolsonSchema.find()
return  res.send(result)
}
export const RolsonFree = async(req,res)=>{
let result = await RolsonSchema.find()
return  res.send(result)
}
export const RolsonDelitem = async (req,res)=>{
let data = await RolsonSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Rolsonsingl =async (req, res) => {
  let result = await RolsonSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const RonsealDAta = async(req,res)=>{
  let result = await RonsealSchema.find()
return  res.send(result)
}
export const RonsealFree = async(req,res)=>{
let result = await RonsealSchema.find()
return  res.send(result)
}
export const RonsealDelitem = async (req,res)=>{
let data = await RonsealSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Ronsealsingl =async (req, res) => {
  let result = await RonsealSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const RustinsDAta = async(req,res)=>{
  let result = await RustinsSchema.find()
return  res.send(result)
}
export const RustinsFree = async(req,res)=>{
let result = await RustinsSchema.find()
return  res.send(result)
}
export const RustinsDelitem = async (req,res)=>{
let data = await RustinsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Rustinssingl =async (req, res) => {
  let result = await RustinsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SecuritDAta = async(req,res)=>{
  let result = await SecuritSchema.find()
return  res.send(result)
}
export const SecuritFree = async(req,res)=>{
let result = await SecuritSchema.find()
return  res.send(result)
}
export const SecuritDelitem = async (req,res)=>{
let data = await SecuritSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Securitsingl =async (req, res) => {
  let result = await SecuritSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SecrupDAta = async(req,res)=>{
  let result = await SecrupSchema.find()
return  res.send(result)
}
export const SecrupFree = async(req,res)=>{
let result = await SecrupSchema.find()
return  res.send(result)
}
export const SecrupDelitem = async (req,res)=>{
let data = await SecrupSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Secrupsingl =async (req, res) => {
  let result = await SecrupSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ShortageDAta = async(req,res)=>{
  let result = await ShortageSchema.find()
return  res.send(result)
}
export const ShortageFree = async(req,res)=>{
let result = await ShortageSchema.find()
return  res.send(result)
}
export const ShortageDelitem = async (req,res)=>{
let data = await ShortageSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Shortagesingl =async (req, res) => {
  let result = await ShortageSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SoudalDAta = async(req,res)=>{
  let result = await SoudalSchema.find()
return  res.send(result)
}
export const SoudalFree = async(req,res)=>{
let result = await SoudalSchema.find()
return  res.send(result)
}
export const SoudalDelitem = async (req,res)=>{
let data = await SoudalSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Soudalsingl =async (req, res) => {
  let result = await SoudalSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const StarpackDAta = async(req,res)=>{
  let result = await StarpackSchema.find()
return  res.send(result)
}
export const StarpackFree = async(req,res)=>{
let result = await StarpackSchema.find()
return  res.send(result)
}
export const StarpackDelitem = async (req,res)=>{
let data = await StarpackSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Starpacksingl =async (req, res) => {
  let result = await StarpackSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SterlingDAta = async(req,res)=>{
  let result = await SterlingSchema.find()
return  res.send(result)
}
export const SterlingFree = async(req,res)=>{
let result = await SterlingSchema.find()
return  res.send(result)
}
export const SterlingDelitem = async (req,res)=>{
let data = await SterlingSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Sterlingsingl =async (req, res) => {
  let result = await SterlingSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const tableauDAta = async(req,res)=>{
  let result = await TableauSchema.find()
return  res.send(result)
}
export const tableauFree = async(req,res)=>{
let result = await TableauSchema.find()
return  res.send(result)
}
export const tableauDelitem = async (req,res)=>{
let data = await TableauSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const tableausingl =async (req, res) => {
  let result = await TableauSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const tricycleDAta = async(req,res)=>{
  let result = await TricycleSchema.find()
return  res.send(result)
}
export const tricycleFree = async(req,res)=>{
let result = await TricycleSchema.find()
return  res.send(result)
}
export const tricycleDelitem = async (req,res)=>{
let data = await TricycleSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const tricyclesingl =async (req, res) => {
  let result = await TricycleSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const UltratapeDAta = async(req,res)=>{
  let result = await UltratapeSchema.find()
return  res.send(result)
}
export const UltratapeFree = async(req,res)=>{
let result = await UltratapeSchema.find()
return  res.send(result)
}
export const UltratapeDelitem = async (req,res)=>{
let data = await UltratapeSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Ultratapesingl =async (req, res) => {
  let result = await UltratapeSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const VacuumDAta = async(req,res)=>{
  let result = await VacuumSchema.find()
return  res.send(result)
}
export const VacuumFree = async(req,res)=>{
let result = await VacuumSchema.find()
return  res.send(result)
}
export const VacuumDelitem = async (req,res)=>{
let data = await VacuumSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Vacuumsingl =async (req, res) => {
  let result = await VacuumSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const VelcroDAta = async(req,res)=>{
  let result = await VelcroSchema.find()
return  res.send(result)
}
export const VelcroFree = async(req,res)=>{
let result = await VelcroSchema.find()
return  res.send(result)
}
export const VelcroDelitem = async (req,res)=>{
let data = await VelcroSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Velcrosingl =async (req, res) => {
  let result = await VelcroSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const VfmpaintDAta = async(req,res)=>{
  let result = await VfmpaintSchema.find()
return  res.send(result)
}
export const VfmpaintFree = async(req,res)=>{
let result = await VfmpaintSchema.find()
return  res.send(result)
}
export const VfmpaintDelitem = async (req,res)=>{
let data = await VfmpaintSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Vfmpaintsingl =async (req, res) => {
  let result = await VfmpaintSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const Wd40DAta = async(req,res)=>{
  let result = await Wd40Schema.find()
return  res.send(result)
}
export const Wd40Free = async(req,res)=>{
let result = await Wd40Schema.find()
return  res.send(result)
}
export const Wd40Delitem = async (req,res)=>{
let data = await Wd40Schema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Wd40singl =async (req, res) => {
  let result = await Wd40Schema.findOne({_id: req.params.id})
  return res.send(result)
}

export const WernerDAta = async(req,res)=>{
  let result = await WernerSchema.find()
return  res.send(result)
}
export const WernerFree = async(req,res)=>{
let result = await WernerSchema.find()
return  res.send(result)
}
export const WernerDelitem = async (req,res)=>{
let data = await WernerSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Wernersingl =async (req, res) => {
  let result = await WernerSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const YelelockDAta = async(req,res)=>{
  let result = await YelelockSchema.find()
return  res.send(result)
}
export const YelelockFree = async(req,res)=>{
let result = await YelelockSchema.find()
return  res.send(result)
}
export const YelelockDelitem = async (req,res)=>{
let data = await YelelockSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Yelelocksingl =async (req, res) => {
  let result = await YelelockSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const UniconDAta = async(req,res)=>{
  let result = await UniconSchema.find()
return  res.send(result)
}
export const UniconFree = async(req,res)=>{
let result = await UniconSchema.find()
return  res.send(result)
}
export const UniconDelitem = async (req,res)=>{
let data = await UniconSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Uniconsingl =async (req, res) => {
  let result = await UniconSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const AmtechDAta = async(req,res)=>{
  let result = await AmtechSchema.find()
return  res.send(result)
}
export const AmtechFree = async(req,res)=>{
let result = await AmtechSchema.find()
return  res.send(result)
}
export const AmtechDelitem = async (req,res)=>{
let data = await AmtechSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Amtechsingl =async (req, res) => {
  let result = await AmtechSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const AntiquxDAta = async(req,res)=>{
  let result = await AntiquxSchema.find()
return  res.send(result)
}
export const AntiquxFree = async(req,res)=>{
let result = await AntiquxSchema.find()
return  res.send(result)
}
export const AntiquxDelitem = async (req,res)=>{
let data = await AntiquxSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Antiquxsingl =async (req, res) => {
  let result = await AntiquxSchema.findOne({_id: req.params.id})
  return res.send(result)
}