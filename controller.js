const cars = require('./db');




const getAllCars = (req, res) => {
    res.status(200).send(cars);
};

const getCarById = (req, res) => {
    const { id } = req.params;
    const car = cars.find(car => car.id === +id);
    if (!car) {
        return res.status(404).send('Car not found');
    }
    res.status(200).send(car);
};

const getCarByModel = (req, res) => {
    const { model } = req.params;
    const car = cars.find(car => car.model === model);
    if (!car) {
        return res.status(404).send('Car not found');
    }
    res.status(200).send(car);
};

const getCarByName = (req, res) => {
    const { name } = req.params;
    const car = cars.find(car => car.name === name);
    if (!car) {
        return res.status(404).send('Car not found');
    }
    res.status(200).send(car);
};

const getCarByYear = (req, res) => {
    const { year } = req.params;
    const car = cars.find(car => car.year === +year);
    if (!car) {
        return res.status(404).send('Car not found');
    }
    res.status(200).send(car);
};

const getCarByColor = (req, res) => {
    const { color } = req.params;
    const car = cars.find(car => car.color === color);
    if (!car) {
        return res.status(404).send('Car not found');
    }
    res.status(200).send(car);
};


module.exports = {
    getAllCars,
    getCarById,
    getCarByName,
    getCarByModel,
    getCarByYear,
    getCarByColor  
};

