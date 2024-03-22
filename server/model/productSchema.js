import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: "string",
        required: true,
        unique: true
    },
    url: "string",
    detailUrl: "string",
    title: "object",
    price: "object",
    quantity: "number",
    description: "string",
    discount: "string",
    tagline: "string"
});

const Product = mongoose.model("product", productSchema);

export default Product;