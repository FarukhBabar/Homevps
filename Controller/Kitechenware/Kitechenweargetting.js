import ChromSchema from '../../config/Kitechenwear/Chrom.js'
import CookwarSchema from '../../config/Kitechenwear/Cookwar.js'
import KettlesSchema from '../../config/Kitechenwear/Kettles.js'
import CulterySchema from '../../config/Kitechenwear/Cultery.js'
import KitechenaccSchema from '../../config/Kitechenwear/Kitechnacc.js'
import KitechenbinSchema from '../../config/Kitechenwear/Kitechnbin.js'
import KitechengaSchema from '../../config/Kitechenwear/Kitechnga.js'
import KitechenkniSchema from '../../config/Kitechenwear/Kitechnkni.js'
import KitechenScaleSchema from '../../config/Kitechenwear/Scalekitehen.js'
import PlastickitechenSchema from '../../config/Kitechenwear/Plastickieche.js' 
import SimplehumanSchema from '../../config/Kitechenwear/Simplehuman.js'
import BreadSchema from '../../config/Kitechenwear/Bread.js'
import TeaSchema from '../../config/Kitechenwear/Tea.js'
import TraySchema from '../../config/Kitechenwear/Tray.js'
import WaterSchema from '../../config/Kitechenwear/Water.js'
import WoodenSchema from '../../config/Kitechenwear/Wooden.js'
import CateringSchema from '../../config/Kitechenwear/Catering.js'

export const ChromeDAta = async(req,res)=>{
    let result = await ChromSchema.find()
  return  res.send(result)
  }
  export const ChromeFree = async(req,res)=>{
  let result = await ChromSchema.find()
  return  res.send(result)
  }
  export const ChromeDelitem = async (req,res)=>{
  let data = await ChromSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Chromesingl =async (req, res) => {
    let result = await ChromSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const CookwarDAta = async(req,res)=>{
    let result = await CookwarSchema.find()
  return  res.send(result)
  }
  export const CookwarFree = async(req,res)=>{
  let result = await CookwarSchema.find()
  return  res.send(result)
  }
  export const CookwarDelitem = async (req,res)=>{
  let data = await CookwarSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Cookwarsingl =async (req, res) => {
    let result = await CookwarSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const KettlesDAta = async(req,res)=>{
    let result = await KettlesSchema.find()
  return  res.send(result)
  }
  export const KettlesFree = async(req,res)=>{
  let result = await KettlesSchema.find()
  return  res.send(result)
  }
  export const KettlesDelitem = async (req,res)=>{
  let data = await KettlesSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Kettlessingl =async (req, res) => {
    let result = await KettlesSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const CulteryDAta = async(req,res)=>{
    let result = await CulterySchema.find()
  return  res.send(result)
  }
  export const CulteryFree = async(req,res)=>{
  let result = await CulterySchema.find()
  return  res.send(result)
  }
  export const CulteryDelitem = async (req,res)=>{
  let data = await CulterySchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Culterysingl =async (req, res) => {
    let result = await CulterySchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const KitechnaccDAta = async(req,res)=>{
    let result = await KitechenaccSchema.find()
  return  res.send(result)
  }
  export const KitechnaccFree = async(req,res)=>{
  let result = await KitechenaccSchema.find()
  return  res.send(result)
  }
  export const KitechnaccDelitem = async (req,res)=>{
  let data = await KitechenaccSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Kitechnaccsingl =async (req, res) => {
    let result = await KitechenaccSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const KitechnbinDAta = async(req,res)=>{
    let result = await KitechenbinSchema.find()
  return  res.send(result)
  }
  export const KitechnbinFree = async(req,res)=>{
  let result = await KitechenbinSchema.find()
  return  res.send(result)
  }
  export const KitechnbinDelitem = async (req,res)=>{
  let data = await KitechenbinSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Kitechnbinsingl =async (req, res) => {
    let result = await KitechenbinSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const KitechngaDAta = async(req,res)=>{
    let result = await KitechengaSchema.find()
  return  res.send(result)
  }
  export const KitechngaFree = async(req,res)=>{
  let result = await KitechengaSchema.find()
  return  res.send(result)
  }
  export const KitechngaDelitem = async (req,res)=>{
  let data = await KitechengaSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Kitechngasingl =async (req, res) => {
    let result = await KitechengaSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const KitechnkniDAta = async(req,res)=>{
  let result = await KitechenkniSchema.find()
return  res.send(result)
}
export const KitechnkniFree = async(req,res)=>{
let result = await KitechenkniSchema.find()
return  res.send(result)
}
export const KitechnkniDelitem = async (req,res)=>{
let data = await KitechenkniSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Kitechnknisingl =async (req, res) => {
  let result = await KitechenkniSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ScalekitehenDAta = async(req,res)=>{
  let result = await KitechenScaleSchema.find()
return  res.send(result)
}
export const ScalekitehenFree = async(req,res)=>{
let result = await KitechenScaleSchema.find()
return  res.send(result)
}
export const ScalekitehenDelitem = async (req,res)=>{
let data = await KitechenScaleSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Scalekitehensingl =async (req, res) => {
  let result = await KitechenScaleSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const PlastickitehenDAta = async(req,res)=>{
  let result = await PlastickitechenSchema.find()
return  res.send(result)
}
export const PlastickitehenFree = async(req,res)=>{
let result = await PlastickitechenSchema.find()
return  res.send(result)
}
export const PlastickitehenDelitem = async (req,res)=>{
let data = await PlastickitechenSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Plastickitehensingl =async (req, res) => {
  let result = await PlastickitechenSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SimplehumanDAta = async(req,res)=>{
  let result = await SimplehumanSchema.find()
return  res.send(result)
}
export const SimplehumanFree = async(req,res)=>{
let result = await SimplehumanSchema.find()
return  res.send(result)
}
export const SimplehumanDelitem = async (req,res)=>{
let data = await SimplehumanSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Simplehumansingl =async (req, res) => {
  let result = await SimplehumanSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BreadDAta = async(req,res)=>{
  let result = await BreadSchema.find()
return  res.send(result)
}
export const BreadFree = async(req,res)=>{
let result = await BreadSchema.find()
return  res.send(result)
}
export const BreadDelitem = async (req,res)=>{
let data = await BreadSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Breadsingl =async (req, res) => {
  let result = await BreadSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const TeaDAta = async(req,res)=>{
  let result = await TeaSchema.find()
return  res.send(result)
}
export const TeaFree = async(req,res)=>{
let result = await TeaSchema.find()
return  res.send(result)
}
export const TeaDelitem = async (req,res)=>{
let data = await TeaSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Teasingl =async (req, res) => {
  let result = await TeaSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const TrayDAta = async(req,res)=>{
  let result = await TraySchema.find()
return  res.send(result)
}
export const TrayFree = async(req,res)=>{
let result = await TraySchema.find()
return  res.send(result)
}
export const TrayDelitem = async (req,res)=>{
let data = await TraySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Traysingl =async (req, res) => {
  let result = await TraySchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const WaterDAta = async(req,res)=>{
  let result = await WaterSchema.find()
return  res.send(result)
}
export const WaterFree = async(req,res)=>{
let result = await WaterSchema.find()
return  res.send(result)
}
export const WaterDelitem = async (req,res)=>{
let data = await WaterSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Watersingl =async (req, res) => {
  let result = await WaterSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const WoodenDAta = async(req,res)=>{
  let result = await WoodenSchema.find()
return  res.send(result)
}
export const WoodenFree = async(req,res)=>{
let result = await WoodenSchema.find()
return  res.send(result)
}
export const WoodenDelitem = async (req,res)=>{
let data = await WoodenSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Woodensingl =async (req, res) => {
  let result = await WoodenSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CateringDAta = async(req,res)=>{
  let result = await CateringSchema.find()
return  res.send(result)
}
export const CateringFree = async(req,res)=>{
let result = await CateringSchema.find()
return  res.send(result)
}
export const CateringDelitem = async (req,res)=>{
let data = await CateringSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Cateringsingl =async (req, res) => {
  let result = await CateringSchema.findOne({_id: req.params.id})
  return res.send(result)
}