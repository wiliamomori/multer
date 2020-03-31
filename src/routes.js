const express = require('express');
const routes = express.Router();

const multer  = require('multer');
const multerConfig = require("./config/multer");

const ProfileController = require('./controllers/ProfileController');

routes.get('/profile', ProfileController.index);
routes.post('/profile', multer(multerConfig).single('avatar'), ProfileController.store);

module.exports = routes;