import dotenv from "dotenv";
import connectMongoDB from "./config/dbconfig.js";
import router from "./routers/index.js";
import express from "express";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/asm";
connectMongoDB(dbUrl);
app.use("/", router)

app.listen(port, () => console.log("Thành công!"));