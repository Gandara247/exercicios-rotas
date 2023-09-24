const express = require('express');
const router = express.Router();
const carController = require('./controller');
const validateUser = require('./middleware')

router.get("/cars", validateUser, carController.getAllCars);
router.get("/cars/:id", validateUser, carController.getCarById);
router.get("/cars/name/:name", validateUser, carController.getCarByName);
router.get("/cars/model/:model", validateUser, carController.getCarByModel);
router.get("/cars/year/:year", validateUser, carController.getCarByYear);
router.get("/cars/color/:color", validateUser, carController.getCarByColor);

module.exports = router;

//http://localhost:3000/cars?senha=carros123
//http://localhost:3000/cars/1?senha=carros123
//http://localhost:3000/cars/name/Audi?senha=carros123
//http://localhost:3000/cars/model/A4?senha=carros123
//http://localhost:3000/cars/year/2019?senha=carros123
//http://localhost:3000/cars/color/black?senha=carros123