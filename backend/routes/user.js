const express = require('express');

//controller function
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router();

// login routes
router.post('/login', loginUser)



// register routes
router.post('/signup', signupUser)


module.exports = router