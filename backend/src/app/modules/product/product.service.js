import Product from "./product.model.js"


const addProductIntoDB = async(payload) =>{
    const result = await Product.create(payload);
    return result;
}

const getAllProductsFromDB = async() =>{
    const result = await Product.find();
    return result;
}

export const ProductServices = {
    addProductIntoDB,
    getAllProductsFromDB
}