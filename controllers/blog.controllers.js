// controllers/blog.controller.js
import Blog from "../models/blog.model.js";

const postBlog = async (req, res) => {
  const { title, message } = req.body;
  const image = req.cloudinaryUrl; // From Cloudinary middleware

  if (!title || !message || !image) {
    return res.status(400).json({
      message: "All fields (title, message, image) are required",
      success: false,
    });
  }

  const blogData = { title, message, image };

  try {
    const savedBlog = await Blog.create(blogData);
    return res.status(201).json({
      message: "Blog saved successfully",
      success: true,
      data: savedBlog,
    });
  } catch (error) {
    console.error("Error while adding blog", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const getBlogs=async (req,res)=>{
  try {
    const blog=await Blog.find();
    return res.status(201).json({
      message:"blog fetched Successfully",
      success:true,
      data:blog
    })
  } catch (error) {
    console.log("error while getting blogs")
    return res.status(500).json({
      message:"Internal server error",
      success:false,
    })
  }
}

const getBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({ success: true, message: "Blog fetched", data: blog });
  } catch (error) {
    console.error("Error fetching single blog:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export  {postBlog,getBlogs,getBlog};
