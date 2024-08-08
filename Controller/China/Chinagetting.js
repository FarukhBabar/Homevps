import DriningglassSchema from '../../config/China/Drinkingglass.js'
import GasstablewearSchema from '../../config/China/Glasstablewear.js'
import HomebakingSchema from '../../config/China/Homebaing.js'
import MugcupSchema from '../../config/China/Mugcups.js'
import StorageacSchema from '../../config/China/Storageaccessories.js'
import MetalbugsSchema from '../../config/China/Metalbuck.js'


export const DrinkingglassDAta = async(req,res)=>{
    let result = await DriningglassSchema.find()
  return  res.send(result)
  }
  export const DrinkingglassFree = async(req,res)=>{
  let result = await DriningglassSchema.find()
  return  res.send(result)
  }
  export const DrinkingglassDelitem = async (req,res)=>{
  let data = await DriningglassSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Drinkingglasssingl =async (req, res) => {
    let result = await DriningglassSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
  export const GlasstablewearDAta = async(req,res)=>{
    let result = await GasstablewearSchema.find()
  return  res.send(result)
  }
  export const GlasstablewearFree = async(req,res)=>{
  let result = await GasstablewearSchema.find()
  return  res.send(result)
  }
  export const GlasstablewearDelitem = async (req,res)=>{
  let data = await GasstablewearSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Glasstablewearsingl =async (req, res) => {
    let result = await GasstablewearSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
  export const HomebakingDAta = async(req,res)=>{
    let result = await HomebakingSchema.find()
  return  res.send(result)
  }
  export const HomebakingFree = async(req,res)=>{
  let result = await HomebakingSchema.find()
  return  res.send(result)
  }
  export const HomebakingDelitem = async (req,res)=>{
  let data = await HomebakingSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Homebakingsingl =async (req, res) => {
    let result = await HomebakingSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
  export const MugcupsDAta = async(req,res)=>{
    let result = await MugcupSchema.find()
  return  res.send(result)
  }
  export const MugcupsFree = async(req,res)=>{
  let result = await MugcupSchema.find()
  return  res.send(result)
  }
  export const MugcupsDelitem = async (req,res)=>{
  let data = await MugcupSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Mugcupssingl =async (req, res) => {
    let result = await MugcupSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
  export const StorageaccessoriesDAta = async(req,res)=>{
    let result = await StorageacSchema.find()
  return  res.send(result)
  }
  export const StorageaccessoriesFree = async(req,res)=>{
  let result = await StorageacSchema.find()
  return  res.send(result)
  }
  export const StorageaccessoriesDelitem = async (req,res)=>{
  let data = await StorageacSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Storageaccessoriessingl =async (req, res) => {
    let result = await StorageacSchema.findOne({_id: req.params.id})
    return res.send(result)
  }

  export const MetalbuckDAta = async(req,res)=>{
    let result = await MetalbugsSchema.find()
  return  res.send(result)
  }
  export const MetalbuckFree = async(req,res)=>{
  let result = await MetalbugsSchema.find()
  return  res.send(result)
  }
  export const MetalbuckDelitem = async (req,res)=>{
  let data = await MetalbugsSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Metalbucksingl =async (req, res) => {
    let result = await MetalbugsSchema.findOne({_id: req.params.id})
    return res.send(result)
  }