import express from "express";
import { ProductControllers } from "./product.controller.js";
import verifyToken from "../../middlewares/verifyToken.js";

const router = express.Router();

router.post('/add-product', ProductControllers.addProduct);
router.get('/all-products', verifyToken, ProductControllers.getAllProducts);

export const ProductRoutes = router;