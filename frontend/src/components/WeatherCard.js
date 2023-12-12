
function WeatherCard(props){
    const weatherData=props.weatherData;
    
    return (
        <div className="flex-col mt-20 bg-blue-100 p-8 rounded-lg">
          <p className="text-4xl">Today's Weather Details</p>
          <div className="flex justify-between">
          <div className="flex-col">
         <p className="text-3xl mt-7">{weatherData.weather[0].main}</p>
         <p className="text-xl mt-1">
        {Math.round((weatherData.main.temp-273.15)*100)/100} &deg;C</p>
         </div>
         <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
         </div>
         <div className="flex justify-between mt-6">
            <div className="flex">
            <img src={require("./../img/humidity.png")} className=" h-10 w-10"/>
            <p className="text-lg mt-1">Humidity</p>
            </div>
            <p className="text-lg">{weatherData.main.humidity}%</p>
         </div>
         <div className="flex justify-between mt-6">
            <div className="flex">
            <img src={require("./../img/wind.png")} className="h-10 w-10"/>
            <p className="text-lg mt-1 ml-2">Wind Speed</p>
            </div>
            <p className="text-lg">{weatherData.wind.speed} m/s</p>
         </div>
         <div className="flex justify-between mt-6">
            <div className="flex">
            <img src={require("./../img/pressure.png")} className="h-10 w-10"/>
            <p className="text-lg mt-1 ml-2">Pressure</p>
            </div>
            <p className="text-lg">{weatherData.main.pressure} hPa</p>
         </div>
        </div>
    )
}

export default WeatherCard;