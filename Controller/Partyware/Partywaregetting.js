import BirthdaybanSchema from '../../config/Partyware/Birthdaybannaer.js'





  export const BirthdaybannaerDAta = async(req,res)=>{
    let result = await BirthdaybanSchema.find()
  return  res.send(result)
  }
  export const BirthdaybannaerFree = async(req,res)=>{
  let result = await BirthdaybanSchema.find()
  return  res.send(result)
  }
  export const BirthdaybannaerDelitem = async (req,res)=>{
  let data = await BirthdaybanSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Birthdaybannaersingl =async (req, res) => {
    let result = await BirthdaybanSchema.findOne({_id: req.params.id})
    return res.send(result)
  }