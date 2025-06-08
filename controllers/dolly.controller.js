import Dolly from "../models/dolly.model.js";

const dolly=async(req ,res)=>{
  const{name,email,phone,location,cartype,additionalrequest,date}=req.body;
  if(!(name || email || phone || location || cartype || date))
  {
    res.status(400).json({
      messgae:"All fields are required",
      success:false
    })
  }
  const dollyData={
    name,
    email,
    phone,
    location,
    cartype,
    additionalrequest,
    date
  }
  try {
    await Dolly.create(dollyData);
    return res.status(201).json({
      message:"dolly data created succesfully",
      success:true,
    })
  } catch (error) {
    console.log("error for dolly",error)
    return res.status(400).json({
      message:"Error while create booking of dolly",
      success:false,
    })
  }
  
}
export default dolly;