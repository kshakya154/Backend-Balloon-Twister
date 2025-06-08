import express from "express"
import dolly from "../controllers/dolly.controller.js";
const route=express.Router();

route.post('/',dolly)

export default route;