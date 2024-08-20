const express = require('express');
const route = express.Router();
let  {SignUp,loginData}=require('../controllers/authController')

route.post("/SignUp",SignUp);
route.post("/login",loginData);

module.exports = { route };
