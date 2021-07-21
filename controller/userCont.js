//importing user model 
let users = require('../models/User');

//returning user details
exports.allUsers = (req, res) =>{
    res.json(users);
}

//creating a signup account
exports.signup = (req, res) => {
    
    //checking if email already exist      
    let userEmail = req.body.email;
    let existingEmail = users.find((user) => user.email === userEmail);
    if(existingEmail){
        res.send(`${userEmail} already exist`);
    }
    //checking if passwords matches         
    if(req.body.password !== req.body.confirmPassword) {
        res.send('password does not match confirm password');
    }
    
    //creating new user
    let newUser = {
        id: users.length + 1,
        email: req.body.email,
        fullName: req.body.fullName,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }
       
    users.push(newUser);
       res.json(users);
    };
    
//creating a signin permit
exports.signIn = (req, res) => {

    let signInAccount = {
        email: req.body.email,
        password: req.body.password
    }
    
    //checking if account is a registered account
    let existingAccount = users.find((user) => {
        if(user.email === signInAccount.email && user.password === signInAccount.password){
            res.json(user);
        }
    });
    
    //checking if account does not exist
    if(!existingAccount){
        res.json('Please Signup to create an account');
    } 
    
} 



