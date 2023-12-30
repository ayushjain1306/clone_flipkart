const products = require('../data.js');
const Product = require('../model/productSchema.js')

async function DefaultData() {
    try {
        await Product.insertMany(products);
        console.log("Data inserted successfully.")
    } 
    catch (error) {
        console.log("Error while inserting data in the database: ", error.message);
    }
}

module.exports = DefaultData;