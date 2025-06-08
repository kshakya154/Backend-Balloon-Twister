import mongoose from "mongoose";
const dolly=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  phone:{
    type:String,
    required:true,
  },
  location:{
    type:String,
    required:true,
  },
  cartype:{
    type:String,
    required:true,
  },
  date:{
    type:Date,
    required:true,
  },
  additionalrequest:{
    type:String,
  },
})

const Dolly=mongoose.model('Dolly',dolly);
export default Dolly;