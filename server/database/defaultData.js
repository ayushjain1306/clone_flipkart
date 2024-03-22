import products from "../data.js";
import Product from "../model/productSchema.js";

async function DefaultData() {
    try {
        await Product.insertMany(products);
    } 
    catch (error) {
        console.log("Error while inserting data in the database: ", error.message);
    }
}

export default DefaultData;