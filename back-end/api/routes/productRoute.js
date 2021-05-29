const express = require('express');
const router = express.Router();


const productController  = require('../controller/productController')


router.post('/addProduct',productController.addProduct);
router.get('/getProducts',productController.getProducts);
router.put('/updateProduct',productController.getProducts);



module.exports = router;