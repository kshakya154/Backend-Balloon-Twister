import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  eventType:{
    type:String,
    required:true
  },
  eventDate:{
    type:Date,
    required:true
  },
  eventLocation:{
    type:String,
    required:true
  },
  services:{
    type:[String],
    required:true
  },
  theme:{
    type:String,
  },
  additionalRequests:{
    type:String,
  },
})

const Booking= mongoose.model('Booking',bookingSchema)
export default Booking