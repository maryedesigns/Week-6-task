const express = require('express');

const bodyParser = require('body-parser');

const app = express();

//product route
const productRoute = require('./route/productRoute');

//user route
const userRoute = require('./route/userRoute');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//mounting product route
app.use('/product', productRoute);

//mounting user route
app.use('/user', userRoute);
      
//listening to server on port 5000
app.listen(5000, () => {
    console.log('Server is running on port: 5000');
});

