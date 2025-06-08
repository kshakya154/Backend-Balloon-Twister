import mongoose from "mongoose";
const contactDetails=new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  subject:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  },
})

const Contact = mongoose.model('Contact',contactDetails)
export default Contact