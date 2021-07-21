const express = require('express');

const router = express.Router();

const productController = require('../controller/productCont');

//establishing various routes
router.get('/', productController.getProducts); //get all product
router.get('/:id', productController.getParticularProduct) //get a particular product by id
router.post('/', productController.createNewProduct) //creating new product 
router.put('/:id', productController.updateProduct) //updating a product by id
router.delete('/:id', productController.deleteProduct) //deleting a product by id

module.exports = router;