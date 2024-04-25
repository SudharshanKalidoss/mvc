const express = require('express');

const loginRoute = express.Router();

const loginController = require('../controller/login.controller');

loginRoute.post('/',loginController.postLogin);

module.exports = loginRoute ;