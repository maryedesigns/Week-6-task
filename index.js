const express = require('express');

const app = express();

const bodyParser = require('body-parser');

let electProducts = require('./models/products.js'); 

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));

//getting the root path 
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Ecommerce Electronics, please navigate to products to view all products</h1>');
});

//getting all products
app.get('/products', (req, res) => {
    res.json(electProducts);
});

//adding a new product 
app.post('/products', (req, res) => {

    let incomingProducts = req.body;

    electProducts.push(incomingProducts);

    res.json(electProducts);
});

//editing and updating existing product 
app.put('/products/:id', (req, res) => {
    
   let productsid = Number(req.params.id);
   let body = req.body;
   let product = electProducts.find((product) => product.id === productsid);

   if(!product){
        res.status(500).send('Product Not Found!!!');
    }  
    else{

        let updatedProduct = { product, body };
        res.json(updatedProduct);  

    }

});

//deleting a product
app.delete('/products/:id', (req, res) => {

    let productsid = Number(req.params.id);
    let existProduct = electProducts.filter((product) => product.id !== productsid);

    if(!existProduct){
        res.status(500).send('Product Not Found!!!');
    }
    else{
        electProducts = existProduct;
        res.json(electProducts);
    }

});

//listening to server on port 5000
app.listen(5000, () => {
    console.log('Server is running on port: 5000');
});