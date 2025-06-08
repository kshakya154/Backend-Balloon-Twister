import Contact from "../models/contact.model.js"

const contact=async(req , res)=>{
  const{Name,email,message,subject}=req.body
  if(!(Name || email || message || subject)){
    return res.status(400).json({
      message:"all fields re required",
      success:true
    })
  }
  const contactData={
    Name,
    email,
    message,
    subject
  }
   await Contact.create(contactData)
      .then((savedContact) => {
        return res.status(201).json({
          message: "contact recieved successfully",
          success: true,
          data: savedContact
        });
      })
      .catch((error) => {
        console.error("contact sending error:", error.message);
        return res.status(500).json({
          message: "Internal server error",
          success: false
        });
      });

}
export default contact;