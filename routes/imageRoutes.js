import express from "express"
const router = express.Router();
import upload from "../middlewares/multer.middleware.js"
import uploadToCloudinary from "../middlewares/uploadToCloudinary.js"

router.post(
  '/upload',
  upload.single('image'), // Handle image field
  uploadToCloudinary,
  (req, res) => {
    // Access Cloudinary URL
    res.json({ imageUrl: req.cloudinaryUrl });
  }
);

export default router;
