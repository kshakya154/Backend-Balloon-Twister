// index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import bookingRoutes from "./routes/booking.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import cors from "cors";
import dollyRoutes from "./routes/dolly.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "https://balloon-twister-tgkk.vercel.app",
  "https://www.balloonstwister.com/"

];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use("/booking", bookingRoutes);
app.use("/dolly", dollyRoutes);
app.use("/contact", contactRoutes);
app.use("/", blogRoutes);
app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy!");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
