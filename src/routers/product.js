import { Router } from "express";
import ProductController from "../controllers/product.js";
import { checkPermision } from "../middlewares/checkPermision.js";

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', checkPermision, productController.createProducts);
productRouter.get('/:id', productController.getProductDetail);
productRouter.put('/:id', checkPermision, productController.updateProducts);
productRouter.delete('/:id', checkPermision, productController.deleteProducts);

export default productRouter;