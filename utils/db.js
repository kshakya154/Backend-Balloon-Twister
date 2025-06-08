import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const connectDB= async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Mongo db connected success")
  } catch (error) {
    console.log("Error while connecting to database",error)
  }
}
export default connectDB;