'use strict'
var app = require('../app');
var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

/*multiparty middleware para poder subir ficheros*/
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir : '../front-pronosticos/src/assets/images'});


api.get('/users', md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/uploadImage', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);
api.post('/sendEmail', UserController.enviarMail);

module.exports = api;