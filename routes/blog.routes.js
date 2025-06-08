// routes/blog.routes.js
import express from 'express';
import upload from '../middlewares/multer.middleware.js';
import uploadToCloudinary from '../middlewares/uploadToCloudinary.js';
import {postBlog,getBlogs,getBlog} from '../controllers/blog.controllers.js';

const router = express.Router();

// Route: POST /addblog
router.post('/addblog', upload.single('image'), uploadToCloudinary, postBlog);
router.get('/blog',getBlogs);
router.get('/blog/:id', getBlog);
export default router;
