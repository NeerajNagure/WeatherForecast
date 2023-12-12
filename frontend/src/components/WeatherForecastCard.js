
function WeatherForecastCard(props){
    let weatherData=props.weatherData;
    return (
        <>
        <p className="text-4xl flex justify-center mt-24 mb-7">5 Day Weather Forecast</p>
        <div>
        <p className="text-2xl ml-8 text-blue-800 font-semibold">
        Average Temperature(Over Next 5 Days): {Math.round((weatherData.avgTemperature-273.15)*100)/100} &deg;C</p>
        <ul className="flex p-8 bg-blue-100 rounded-lg justify-between m-5">
            {weatherData.list.map((weatherElement,index)=>(
                <li key={index} className="px-8">
                    <p className="text-xl">{weatherElement.dt_txt.slice(0,10)}</p>
                    <img src={`https://openweathermap.org/img/wn/${weatherElement.weather[0].icon}@2x.png`}/>
                    <p className="text-2xl text-center">{weatherElement.weather[0].main}</p>
                    <p className="text-lg text-center">{Math.round((weatherElement.main.temp-273.15)*100)/100} &deg;C</p>
                </li>
            ))}
        </ul>
        </div>
        </>
    )
}

export default WeatherForecastCard;