import express from "express"
import booking from "../controllers/booking.controller.js";
const router=express.Router();

router.post('/',booking)
export default router;