const express = require('express');
const router = express.Router();
const carController = require('./controller');

router.get("/cars", carController.getAllCars);
router.get("/cars/:id", carController.getCarById);
router.get("/cars/name/:name", carController.getCarByName);
router.get("/cars/model/:model", carController.getCarByModel);
router.get("/cars/year/:year", carController.getCarByYear);
router.get("/cars/color/:color", carController.getCarByColor);

module.exports = router;

//http://localhost:3000/cars
//http://localhost:3000/cars/1
//http://localhost:3000/cars/name/Audi
//http://localhost:3000/cars/model/A4
//http://localhost:3000/cars/year/2019
//http://localhost:3000/cars/color/black