import GarlandSchema from '../../config/Flower/Garland.js'
import WerathsSchema from '../../config/Flower/Weraths.js'
import SinglestemSchema from '../../config/Flower/Singlestem.js'
import DiriesSchema from '../../config/Flower/Diries.js'
import KidsSchema from '../../config/Stationery/Kids.js'
import MailingSchema from '../../config/Stationery/Mailing.js'
import OfficeSchema from '../../config/Stationery/Office.js'

export const GarlandDAta = async(req,res)=>{
  let result = await GarlandSchema.find()
return  res.send(result)
}
export const GarlandFree = async(req,res)=>{
let result = await GarlandSchema.find()
return  res.send(result)
}
export const GarlandDelitem = async (req,res)=>{
let data = await GarlandSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Garlandsingl =async (req, res) => {
  let result = await GarlandSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SinglestemDAta = async(req,res)=>{
  let result = await SinglestemSchema.find()
return  res.send(result)
}
export const SinglestemFree = async(req,res)=>{
let result = await SinglestemSchema.find()
return  res.send(result)
}
export const SinglestemDelitem = async (req,res)=>{
let data = await SinglestemSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Singlestemsingl =async (req, res) => {
  let result = await SinglestemSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const WerathsDAta = async(req,res)=>{
  let result = await WerathsSchema.find()
return  res.send(result)
}
export const WerathsFree = async(req,res)=>{
let result = await WerathsSchema.find()
return  res.send(result)
}
export const WerathsDelitem = async (req,res)=>{
let data = await WerathsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Werathssingl =async (req, res) => {
  let result = await WerathsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const DiariesDAta = async(req,res)=>{
  let result = await DiriesSchema.find()
return  res.send(result)
}
export const DiariesFree = async(req,res)=>{
let result = await DiriesSchema.find()
return  res.send(result)
}
export const DiariesDelitem = async (req,res)=>{
let data = await DiriesSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Diariessingl =async (req, res) => {
  let result = await DiriesSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const KidsDAta = async(req,res)=>{
  let result = await KidsSchema.find()
return  res.send(result)
}
export const KidsFree = async(req,res)=>{
let result = await KidsSchema.find()
return  res.send(result)
}
export const KidsDelitem = async (req,res)=>{
let data = await KidsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Kidssingl =async (req, res) => {
  let result = await KidsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const MailingDAta = async(req,res)=>{
  let result = await MailingSchema.find()
return  res.send(result)
}
export const MailingFree = async(req,res)=>{
let result = await MailingSchema.find()
return  res.send(result)
}
export const MailingDelitem = async (req,res)=>{
let data = await MailingSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Mailingsingl =async (req, res) => {
  let result = await MailingSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const OfficeDAta = async(req,res)=>{
  let result = await OfficeSchema.find()
return  res.send(result)
}
export const OfficeFree = async(req,res)=>{
let result = await OfficeSchema.find()
return  res.send(result)
}
export const OfficeDelitem = async (req,res)=>{
let data = await OfficeSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Officesingl =async (req, res) => {
  let result = await OfficeSchema.findOne({_id: req.params.id})
  return res.send(result)
}