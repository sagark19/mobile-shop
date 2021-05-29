const Product = require('../models/productModel')


exports.addProduct = async (req,res) => {
    let productData = new Product({
        pname: req.body.name,
        image: req.body.image,
        description:req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        price: req.body.price,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    });

    try{
        const createdProduct = await productData.save();
        res.status(201).json(createdProduct)
    }catch(error){
        console.log('error',error)
    }
}

exports.getProducts = async (req,res) => {

    try{
        const products = await Product.find({});
        res.status(201).json(products)
    }catch(error){
        res.status(404).json(error)
        console.log('error',error)
    }
}

