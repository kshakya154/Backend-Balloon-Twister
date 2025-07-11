import mongoose from "mongoose";
const blog=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
})

const Blog=mongoose.model('Blog',blog)
export default Blog