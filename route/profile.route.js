const express  = require('express');

const profileController = require('../controller/profile.controller');

const profileroute = express.Router();

profileroute.get('/',profileController.getProfile);

module.exports = profileroute ; 
