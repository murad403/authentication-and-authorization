import mongoose, { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    location: {type: String, required: true},
})

const Product = mongoose.models.Product || model("Product", productSchema);
export default Product;