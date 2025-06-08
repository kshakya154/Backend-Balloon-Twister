import express from "express"
import contact from "../controllers/contact.controller.js";
const route=express.Router();

route.post('/',contact)

export default route;