
//importing product model 
let electProducts = require('../models/products'); 

//getting all products
exports.getProducts = (req, res) => {
    return res.json(electProducts);
} 

//getting a particular product by id
exports.getParticularProduct = (req, res) => {
    let productid = Number(req.params.id);
    let findProduct = electProducts.find((product) => product.id === productid);

    if(!findProduct) {
        res.status(404).send(`product with ${productid} not found`);
    }
    else{
        res.json(findProduct);
    }
}

//Establishing a posting request 
exports.createNewProduct = (req, res) => {

    let newProduct = {
        id: electProducts.length + 1,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,

    }   

        electProducts.push(newProduct);
        res.json(electProducts);
    };

//Editing and updating existing product by id
exports.updateProduct = (req, res) => {
    
    let productid = Number(req.params.id);
    let body = req.body;
    let product = electProducts.find((product) => product.id === productid);
    let indexOfProduct = electProducts.indexOf(product);
 
    if(!product){
         res.status(404).send('Product Not Found!!!');
        }  
     else{
          let updatedProduct = {...product, ...body};
          electProducts[indexOfProduct] = updatedProduct;
          res.json(updatedProduct);  
 
        }
};

//Deleting a product by id
exports.deleteProduct = (req, res) => {

    let productid = Number(req.params.id);
    let existProduct = electProducts.filter((product) => product.id !== productid);

    if(!existProduct){
        res.status(404).send('Product Not Found!!!');
    }
    else{
        electProducts = existProduct;
        res.json(electProducts);
    }
}
