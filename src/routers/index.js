import { Router } from "express";
import authRouter from "./auth.js";
import productRouter from "./product.js";
import categoriesRouter from "./categories.js";


const router = Router();

router.get('/', (req, res) => {
    res.send("Home")
})
router.use("/products", productRouter);
router.use("/categories", categoriesRouter);
router.use("/user", authRouter);

export default router;