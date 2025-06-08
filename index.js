// index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import bookingRoutes from "./routes/booking.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import cors from "cors"
import dollyRoutes from "./routes/dolly.routes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use("/booking", bookingRoutes);
app.use("/dolly", dollyRoutes);
app.use("/contact", contactRoutes);
app.use("/", blogRoutes); // blog.routes handles /addblog route

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
