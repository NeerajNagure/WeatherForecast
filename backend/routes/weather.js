const express = require('express')
const weatherController=require('./../controllers/weatherController');
const router = express.Router()

router.post('/report',weatherController.getReport);

router.post('/forecast', weatherController.getForecast);

module.exports = router
