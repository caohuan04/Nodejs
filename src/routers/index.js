import { Router } from "express";
// import authRouter from "./auth";
// import productRouter from "./product";
// import categoriesRouter from "./categories";


const router = Router();

router.get('/', (req, res) => {
    res.send("Home")
})
// router.use("/products", productRouter);
// router.use("/categories", categoriesRouter);
// router.use("/user", authRouter);

export default router;