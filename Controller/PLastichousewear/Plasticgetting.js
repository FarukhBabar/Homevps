import MelaminSchema from '../../config/Plastichousewear/Melamin.js' 
import PlasticbathroomSchema from '../../config/Plastichousewear/Plasticbathroom.js'
import PlasticcabnitSchema from '../../config/Plastichousewear/Cabnit.js'
import HandwashSchema from '../../config/Plastichousewear/Handwash.js'
import HealthcareeSchema from '../../config/Plastichousewear/Healthcaree.js'


 
  export const MelaminDAta = async(req,res)=>{
    let result = await MelaminSchema.find()
  return  res.send(result)
  }
  export const MelaminFree = async(req,res)=>{
  let result = await MelaminSchema.find()
  return  res.send(result)
  }
  export const MelaminDelitem = async (req,res)=>{
  let data = await MelaminSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Melaminsingl =async (req, res) => {
    let result = await MelaminSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
  export const PlasticbathroomDAta = async(req,res)=>{
    let result = await PlasticbathroomSchema.find()
  return  res.send(result)
  }
  export const PlasticbathroomFree = async(req,res)=>{
  let result = await PlasticbathroomSchema.find()
  return  res.send(result)
  }
  export const PlasticbathroomDelitem = async (req,res)=>{
  let data = await PlasticbathroomSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Plasticbathroomsingl =async (req, res) => {
    let result = await PlasticbathroomSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
    
  export const PlasticcabnitDAta = async(req,res)=>{
    let result = await PlasticcabnitSchema.find()
  return  res.send(result)
  }
  export const PlasticcabnitFree = async(req,res)=>{
  let result = await PlasticcabnitSchema.find()
  return  res.send(result)
  }
  export const PlasticcabnitDelitem = async (req,res)=>{
  let data = await PlasticcabnitSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Plasticcabnitsingl =async (req, res) => {
    let result = await PlasticcabnitSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
   
  export const HandwashDAta = async(req,res)=>{
    let result = await HandwashSchema.find()
  return  res.send(result)
  }
  export const HandwashFree = async(req,res)=>{
  let result = await HandwashSchema.find()
  return  res.send(result)
  }
  export const HandwashDelitem = async (req,res)=>{
  let data = await HandwashSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Handwashsingl =async (req, res) => {
    let result = await HandwashSchema.findOne({_id: req.params.id})
    return res.send(result)
  } 
  
  export const HealthcareeDAta = async(req,res)=>{
    let result = await HealthcareeSchema.find()
  return  res.send(result)
  }
  export const HealthcareeFree = async(req,res)=>{
  let result = await HealthcareeSchema.find()
  return  res.send(result)
  }
  export const HealthcareeDelitem = async (req,res)=>{
  let data = await HealthcareeSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Healthcareesingl =async (req, res) => {
    let result = await HealthcareeSchema.findOne({_id: req.params.id})
    return res.send(result)
  } 