const express = require('express');
const changepassRoute = express.Router();
const changepasswordController = require('../controller/changepassword.controller');

changepassRoute.put('/',changepasswordController.putChangepass);

module.exports = changepassRoute ;