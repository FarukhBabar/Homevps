import CurtainsSchema from '../../config/Accessoriestowel/Curtains.js'
import TablecoverSchema from "../../config/Accessoriestowel/Tablecover.js"
import TeatowelSchema from '../../config/Accessoriestowel/Teatowel.js'
import TowelsaccSchema from '../../config/Accessoriestowel/Towelsacc.js'



export const CurtainsDAta = async(req,res)=>{
    let result = await CurtainsSchema.find()
  return  res.send(result)
  }
  export const CurtainsFree = async(req,res)=>{
  let result = await CurtainsSchema.find()
  return  res.send(result)
  }
  export const CurtainsDelitem = async (req,res)=>{
  let data = await CurtainsSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Curtainssingl =async (req, res) => {
    let result = await CurtainsSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const TablecoverDAta = async(req,res)=>{
    let result = await TablecoverSchema.find()
  return  res.send(result)
  }
  export const TablecoverFree = async(req,res)=>{
  let result = await TablecoverSchema.find()
  return  res.send(result)
  }
  export const TablecoverDelitem = async (req,res)=>{
  let data = await TablecoverSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Tablecoversingl =async (req, res) => {
    let result = await TablecoverSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const TeatowelDAta = async(req,res)=>{
    let result = await TeatowelSchema.find()
  return  res.send(result)
  }
  export const TeatowelFree = async(req,res)=>{
  let result = await TeatowelSchema.find()
  return  res.send(result)
  }
  export const TeatowelDelitem = async (req,res)=>{
  let data = await TeatowelSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Teatowelsingl =async (req, res) => {
    let result = await TeatowelSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
   
export const TowelsaccDAta = async(req,res)=>{
    let result = await TowelsaccSchema.find()
  return  res.send(result)
  }
  export const TowelsaccFree = async(req,res)=>{
  let result = await TowelsaccSchema.find()
  return  res.send(result)
  }
  export const TowelsaccDelitem = async (req,res)=>{
  let data = await TowelsaccSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Towelsaccsingl =async (req, res) => {
    let result = await TowelsaccSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  