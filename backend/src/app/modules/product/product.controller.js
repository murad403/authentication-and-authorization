import catchAsync from "../../utils/catchAsync.js";
import { ProductServices } from "./product.service.js";

const addProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.addProductIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Product added successfully",
        data: result
    })
})
const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
        success: true,
        message: "Retrived all product successfully",
        data: result
    })
})



export const ProductControllers = {
    addProduct,
    getAllProducts
}