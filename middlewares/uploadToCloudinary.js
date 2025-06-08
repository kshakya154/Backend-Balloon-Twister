// middleware/uploadToCloudinary.js
import fs from "fs"
import cloudinary from "../utils/cloudinary.js"

const uploadToCloudinary = async (req, res, next) => {
  try {
    const filePath = req.file.path;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'your-folder-name' // Optional folder name
    });

    // Save the uploaded file URL to request object
    req.cloudinaryUrl = result.secure_url;

    // Delete local file after upload
    fs.unlinkSync(filePath);

    next();
  } catch (err) {
    return res.status(500).json({ error: 'Failed to upload image' });
  }
};

export default uploadToCloudinary;
