const express = require('express')
const router = express.Router()
const fetch = require('isomorphic-fetch')

const API_KEY = '68c3a1ead556e603746632f53245414a'

router.post('/report', async (req, res) => {
  try {
    const { city, country } = req.body;
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const weatherJson = await weatherData.json()
    res.json(weatherJson);
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.post('/forecast', async(req,res)=>{
  try{
  const {city,country}=req.body;
  const forecastData=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`);
  const forecastJson=await forecastData.json();
  res.json(forecastJson);
  } catch (err) {
  console.error(err.message)
  res.status(500).send('Server Error')
}
})

module.exports = router
