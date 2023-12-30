const Product = require('../model/productSchema.js');

async function getProducts(request, response){
    try{
        const products = await Product.find({});

        response.status(200).json(products);
    }
    catch (error){
        response.status(500).json({message: error.message});
    }
}

async function getProductById(request, response){
    try {
        const idReq = request.params.id;

        const product = await Product.findOne({id: idReq});

        response.status(200).json(product);
    }
    catch (error){
        response.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getProducts,
    getProductById
};