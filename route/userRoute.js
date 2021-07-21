const express = require('express');

const router = express.Router();

const userController = require('../controller/userCont');

router.get('/', userController.allUsers); // getting all users
router.post('/signup', userController.signup); //establishing signup account
router.post('/signin', userController.signIn); //establishing signin account

module.exports = router;