const express = require('express');
const registerRoute = express.Router();

const registerController = require('../controller/register.controller');

registerRoute.post('/',registerController.postRegister);

module.exports = registerRoute ; 