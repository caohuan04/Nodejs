import dotenv from "dotenv";
import connectMongoDB from "./config/dbconfig";
import router from "./routers";
import express from "express";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/asm";
connectMongoDB(dbUrl);
app.use("/", router)

export const viteNodeApp = app;