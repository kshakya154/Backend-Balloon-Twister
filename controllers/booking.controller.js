import Booking from "../models/booking.model.js";

const booking =async(req,res)=>{
  const{name,email,phone,eventType,eventDate,eventLocation,services,theme,additionalRequests}=req.body;
  if(!(name || email || phone || eventDate || eventLocation || eventType || services || theme || additionalRequests)){
    return res.status(400).json({
      message:"All fields are required",
      success:false,
    })
  }
  const newBooking={
    name,
    email,
    phone,
    eventDate,
    eventLocation,
    eventType,
    services,
    theme,
    additionalRequests
  }
  await Booking.create(newBooking)
    .then((savedBooking) => {
      return res.status(201).json({
        message: "Booking created successfully",
        success: true,
        data: savedBooking
      });
    })
    .catch((error) => {
      console.error("Booking insertion error:", error.message);
      return res.status(500).json({
        message: "Internal server error",
        success: false
      });
    });
}

export default booking;