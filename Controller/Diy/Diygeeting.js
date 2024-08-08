import BarrientSchema from '../../config/Diy/Barrient.js'
import BartolineSchema from '../../config/Diy/Bartoline.js'
import BirdbrandSchema from '../../config/Diy/Birdbrand.js'
import BlackSchema from '../../config/Diy/Blackspur.js'
import BonitSchema from '../../config/Diy/Bonit.js'
import BostikSchema from '../../config/Diy/Bostik.js'
import BriwaxSchema from '../../config/Diy/Briwax.js'
import BrookSchema from '../../config/Diy/Brook.js'
import CarproductSchema from '../../config/Diy/Carpro.js'
import CarplanSchema from '../../config/Diy/Carplan.js'
import  ChomisSchema from '../../config/Diy/Chomis.js'
import CommandSchema from '../../config/Diy/Comand.js'
import CoralSchema from '../../config/Diy/Coral.js'
import CrownSchema from '../../config/Diy/Crown.js'
import DektonSchema from '../../config/Diy/Dekton.js'
import DemsumSchema from '../../config/Diy/Demsum.js'
import DarperSchema from '../../config/Diy/Darper.js'
import EdcoSchema from '../../config/Diy/Edco.js'
import EverSchema from '../../config/Diy/Ever.js'
import ExitexSchema from '../../config/Diy/Exitex.js'
import FitSchema from '../../config/Diy/Fitforjob.js'
import GlobalSchema from '../../config/Diy/Global.js'
import GasSchema from '../../config/Diy/Gassystem.js'
import GorilaSchema from '../../config/Diy/Gorila.js'
import HagesanSchema from '../../config/Diy/Hagesan.js'
import HardwaretoSchema from '../../config/Diy/Hardware.js'
import HarrisSchema from '../../config/Diy/Harris.js'
import HilkaSchema from '../../config/Diy/Hilka.js'
import HumnrolSchema from '../../config/Diy/Humnrol.js'
import JbwelSchema from '../../config/Diy/Jbwel.js'
import KilrockSchema from '../../config/Diy/Kilrock.js'
import LadderSchema from '../../config/Diy/Ladder.js'
import LocktileSchema from '../../config/Diy/Locktile.js'
export const BarrientDAta = async(req,res)=>{
    let result = await BarrientSchema.find()
  return  res.send(result)
  }
  export const BarrientFree = async(req,res)=>{
  let result = await BarrientSchema.find()
  return  res.send(result)
  }
  export const BarrientDelitem = async (req,res)=>{
  let data = await BarrientSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Barrientsingl =async (req, res) => {
    let result = await BarrientSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const BartolinDAta = async(req,res)=>{
    let result = await BartolineSchema.find()
  return  res.send(result)
  }
  export const BartolinFree = async(req,res)=>{
  let result = await BartolineSchema.find()
  return  res.send(result)
  }
  export const BartolinDelitem = async (req,res)=>{
  let data = await BartolineSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Bartolinsingl =async (req, res) => {
    let result = await BartolineSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const BirdbrandDAta = async(req,res)=>{
    let result = await BirdbrandSchema.find()
  return  res.send(result)
  }
  export const BirbrandFree = async(req,res)=>{
  let result = await BirdbrandSchema.find()
  return  res.send(result)
  }
  export const BirdbrandDelitem = async (req,res)=>{
  let data = await BirdbrandSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Birdbrandsingl =async (req, res) => {
    let result = await BirdbrandSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const BlackDAta = async(req,res)=>{
    let result = await BlackSchema.find()
  return  res.send(result)
  }
  export const BlackFree = async(req,res)=>{
  let result = await BlackSchema.find()
  return  res.send(result)
  }
  export const BlackDelitem = async (req,res)=>{
  let data = await BlackSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Blacksingl =async (req, res) => {
    let result = await BlackSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const BonitDAta = async(req,res)=>{
    let result = await BonitSchema.find()
  return  res.send(result)
  }
  export const BonitFree = async(req,res)=>{
  let result = await BonitSchema.find()
  return  res.send(result)
  }
  export const BonitDelitem = async (req,res)=>{
  let data = await BonitSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Bonitsingl =async (req, res) => {
    let result = await BonitSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const BostikDAta = async(req,res)=>{
  let result = await BostikSchema.find()
return  res.send(result)
}
export const BostikFree = async(req,res)=>{
let result = await BostikSchema.find()
return  res.send(result)
}
export const BostikDelitem = async (req,res)=>{
let data = await BostikSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bostiksingl =async (req, res) => {
  let result = await BostikSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BriwaxDAta = async(req,res)=>{
  let result = await BriwaxSchema.find()
return  res.send(result)
}
export const BriwaxFree = async(req,res)=>{
let result = await BriwaxSchema.find()
return  res.send(result)
}
export const BriwaxDelitem = async (req,res)=>{
let data = await BriwaxSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Briwaxsingl =async (req, res) => {
  let result = await BriwaxSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BrookDAta = async(req,res)=>{
  let result = await BrookSchema.find()
return  res.send(result)
}
export const BrookFree = async(req,res)=>{
let result = await BrookSchema.find()
return  res.send(result)
}
export const BrookDelitem = async (req,res)=>{
let data = await BrookSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Brooksingl =async (req, res) => {
  let result = await BrookSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CarproDAta = async(req,res)=>{
  let result = await CarproductSchema.find()
return  res.send(result)
}
export const CarproFree = async(req,res)=>{
let result = await CarproductSchema.find()
return  res.send(result)
}
export const CarproDelitem = async (req,res)=>{
let data = await CarproductSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Carprosingl =async (req, res) => {
  let result = await CarproductSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CarplanDAta = async(req,res)=>{
  let result = await CarplanSchema.find()
return  res.send(result)
}
export const CarplanFree = async(req,res)=>{
let result = await CarplanSchema.find()
return  res.send(result)
}
export const CarplanDelitem = async (req,res)=>{
let data = await CarplanSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Carplansingl =async (req, res) => {
  let result = await CarplanSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ChomisDAta = async(req,res)=>{
  let result = await ChomisSchema.find()
return  res.send(result)
}
export const ChomisFree = async(req,res)=>{
let result = await ChomisSchema.find()
return  res.send(result)
}
export const ChomisDelitem = async (req,res)=>{
let data = await ChomisSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Chomissingl =async (req, res) => {
  let result = await ChomisSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CommandDAta = async(req,res)=>{
  let result = await CommandSchema.find()
return  res.send(result)
}
export const CommandFree = async(req,res)=>{
let result = await CommandSchema.find()
return  res.send(result)
}
export const CommandDelitem = async (req,res)=>{
let data = await CommandSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Commandsingl =async (req, res) => {
  let result = await CommandSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CoralDAta = async(req,res)=>{
  let result = await CoralSchema.find()
return  res.send(result)
}
export const CoralFree = async(req,res)=>{
let result = await CoralSchema.find()
return  res.send(result)
}
export const CoralDelitem = async (req,res)=>{
let data = await CoralSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Coralsingl =async (req, res) => {
  let result = await CoralSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CrownDAta = async(req,res)=>{
  let result = await CrownSchema.find()
return  res.send(result)
}
export const CrownFree = async(req,res)=>{
let result = await CrownSchema.find()
return  res.send(result)
}
export const CrownDelitem = async (req,res)=>{
let data = await CrownSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Crownsingl =async (req, res) => {
  let result = await CrownSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const DektonDAta = async(req,res)=>{
  let result = await DektonSchema.find()
return  res.send(result)
}
export const DektonFree = async(req,res)=>{
let result = await DektonSchema.find()
return  res.send(result)
}
export const DektonDelitem = async (req,res)=>{
let data = await DektonSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Dektonsingl =async (req, res) => {
  let result = await DektonSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const DemsumDAta = async(req,res)=>{
  let result = await DemsumSchema.find()
return  res.send(result)
}
export const DemsumFree = async(req,res)=>{
let result = await DemsumSchema.find()
return  res.send(result)
}
export const DemsumDelitem = async (req,res)=>{
let data = await DemsumSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Demsumsingl =async (req, res) => {
  let result = await DemsumSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const DarperDAta = async(req,res)=>{
  let result = await DarperSchema.find()
return  res.send(result)
}
export const DarperFree = async(req,res)=>{
let result = await DarperSchema.find()
return  res.send(result)
}
export const DarperDelitem = async (req,res)=>{
let data = await DarperSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Darpersingl =async (req, res) => {
  let result = await DarperSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const EdcoDAta = async(req,res)=>{
  let result = await EdcoSchema.find()
return  res.send(result)
}
export const EdcoFree = async(req,res)=>{
let result = await EdcoSchema.find()
return  res.send(result)
}
export const EdcoDelitem = async (req,res)=>{
let data = await EdcoSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Edcosingl =async (req, res) => {
  let result = await EdcoSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const EverDAta = async(req,res)=>{
  let result = await EverSchema.find()
return  res.send(result)
}
export const EverFree = async(req,res)=>{
let result = await EverSchema.find()
return  res.send(result)
}
export const EverDelitem = async (req,res)=>{
let data = await EverSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Eversingl =async (req, res) => {
  let result = await EverSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ExitexDAta = async(req,res)=>{
  let result = await ExitexSchema.find()
return  res.send(result)
}
export const ExitexFree = async(req,res)=>{
let result = await ExitexSchema.find()
return  res.send(result)
}
export const ExitexDelitem = async (req,res)=>{
let data = await ExitexSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Exitexsingl =async (req, res) => {
  let result = await ExitexSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const FitDAta = async(req,res)=>{
  let result = await FitSchema.find()
return  res.send(result)
}
export const FitFree = async(req,res)=>{
let result = await FitSchema.find()
return  res.send(result)
}
export const FitDelitem = async (req,res)=>{
let data = await FitSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Fitsingl =async (req, res) => {
  let result = await FitSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const GlobalDAta = async(req,res)=>{
  let result = await GlobalSchema.find()
return  res.send(result)
}
export const GlobalFree = async(req,res)=>{
let result = await GlobalSchema.find()
return  res.send(result)
}
export const GlobalDelitem = async (req,res)=>{
let data = await GlobalSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Globalsingl =async (req, res) => {
  let result = await GlobalSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const GasDAta = async(req,res)=>{
  let result = await GasSchema.find()
return  res.send(result)
}
export const GasFree = async(req,res)=>{
let result = await GasSchema.find()
return  res.send(result)
}
export const GasDelitem = async (req,res)=>{
let data = await GasSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Gassingl =async (req, res) => {
  let result = await GasSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const GorilaDAta = async(req,res)=>{
  let result = await GorilaSchema.find()
return  res.send(result)
}
export const GorilaFree = async(req,res)=>{
let result = await GorilaSchema.find()
return  res.send(result)
}
export const GorilaDelitem = async (req,res)=>{
let data = await GorilaSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Gorilasingl =async (req, res) => {
  let result = await GorilaSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const HagesanDAta = async(req,res)=>{
  let result = await HagesanSchema.find()
return  res.send(result)
}
export const HagesanFree = async(req,res)=>{
let result = await HagesanSchema.find()
return  res.send(result)
}
export const HagesanDelitem = async (req,res)=>{
let data = await HagesanSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Hagesansingl =async (req, res) => {
  let result = await HagesanSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const HardwareDAta = async(req,res)=>{
  let result = await HardwaretoSchema.find()
return  res.send(result)
}
export const HardwareFree = async(req,res)=>{
let result = await HardwaretoSchema.find()
return  res.send(result)
}
export const HardwareDelitem = async (req,res)=>{
let data = await HardwaretoSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Hardwaresingl =async (req, res) => {
  let result = await HardwaretoSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const HarrisDAta = async(req,res)=>{
  let result = await HarrisSchema.find()
return  res.send(result)
}
export const HarrisFree = async(req,res)=>{
let result = await HarrisSchema.find()
return  res.send(result)
}
export const HarrisDelitem = async (req,res)=>{
let data = await HarrisSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Harrissingl =async (req, res) => {
  let result = await HarrisSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const HilkaAta = async(req,res)=>{
  let result = await HilkaSchema.find()
return  res.send(result)
}
export const HilkaFree = async(req,res)=>{
let result = await HilkaSchema.find()
return  res.send(result)
}
export const HilkaDelitem = async (req,res)=>{
let data = await HilkaSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Hilkasingl =async (req, res) => {
  let result = await HilkaSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const HumnrolDAta = async(req,res)=>{
  let result = await HumnrolSchema.find()
return  res.send(result)
}
export const HumnrolFree = async(req,res)=>{
let result = await HumnrolSchema.find()
return  res.send(result)
}
export const HumnrolDelitem = async (req,res)=>{
let data = await HumnrolSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Humnrolsingl =async (req, res) => {
  let result = await HumnrolSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const JbwelDAta = async(req,res)=>{
  let result = await JbwelSchema.find()
return  res.send(result)
}
export const JbwelFree = async(req,res)=>{
let result = await JbwelSchema.find()
return  res.send(result)
}
export const JbwelDelitem = async (req,res)=>{
let data = await JbwelSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Jbwelsingl =async (req, res) => {
  let result = await JbwelSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const KilrockDAta = async(req,res)=>{
  let result = await KilrockSchema.find()
return  res.send(result)
}
export const KilrockFree = async(req,res)=>{
let result = await KilrockSchema.find()
return  res.send(result)
}
export const KilrockDelitem = async (req,res)=>{
let data = await KilrockSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Kilrocksingl =async (req, res) => {
  let result = await KilrockSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const LadderDAta = async(req,res)=>{
  let result = await LadderSchema.find()
return  res.send(result)
}
export const LadderFree = async(req,res)=>{
let result = await LadderSchema.find()
return  res.send(result)
}
export const LadderDelitem = async (req,res)=>{
let data = await LadderSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Laddersingl =async (req, res) => {
  let result = await LadderSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const LocktileDAta = async(req,res)=>{
  let result = await LocktileSchema.find()
return  res.send(result)
}
export const LocktileFree = async(req,res)=>{
let result = await LocktileSchema.find()
return  res.send(result)
}
export const LocktileDelitem = async (req,res)=>{
let data = await LocktileSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Locktilesingl =async (req, res) => {
  let result = await LocktileSchema.findOne({_id: req.params.id})
  return res.send(result)
}
