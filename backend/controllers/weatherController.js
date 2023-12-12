const fetch = require('isomorphic-fetch')
const API_KEY = '68c3a1ead556e603746632f53245414a'

exports.getReport=async (req,res)=>{
    try {
        const { city, country } = req.body;
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
        const weatherJson = await weatherData.json()
        res.json(weatherJson);
      } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
      }
}

exports.getForecast= async(req,res)=>{
  try{
    const {city,country}=req.body;
    const forecastData=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`);
    const forecastJson=await forecastData.json();
    let newData=forecastJson.list.filter((ele,index)=>{
        return (index>=8&&(index%8==0));
    });
    let avgTemperature=0;
    newData.map((ele)=>{
        avgTemperature+=ele.main.temp;
    })
    avgTemperature=avgTemperature/5;
    avgTemperature=Math.round(avgTemperature*100)/100;
    const newForecastData={
        avgTemperature:avgTemperature,
        list:newData
    };
    res.json(newForecastData);
    } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}