const express = require('express');
const router = express.Router();

const plantas_controller = require('../controllers/plantas.controller');

const plantas = [];

//router.get es para registrar un middleware para peticiones HTTP GET
router.get('/agregar', plantas_controller.get_agregar);

//router.post es para registrar un middleware para peticiones HTTP POST
router.post('/agregar', plantas_controller.post_agregar);

const path = require('path');
router.get('/regar', plantas_controller.get_regar);