import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import wasemeshiRoute from "./routes/wasemeshi.route.js";
import categoryRoute from "./routes/category.route.js";

const app = express();
const PORT = 8000;
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/wasemeshi/", wasemeshiRoute);
app.use("/api/category/", categoryRoute);

app.listen(PORT, () => {
  connect();
  console.log("Server is running!");
});
