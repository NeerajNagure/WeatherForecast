import React from "react";
import { useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherForecastCard from "./WeatherForecastCard";
const ENDPOINT="https://weather-forecast-api-ikla.onrender.com";

function NewPreferences() {
    const [weatherData,setWeatherData]=useState();
    const [fivedayWeatherData,set5dayWeatherData]=useState();
    const [displayWeather,setDisplayWeather]=useState(0);
        const handleSubmit = async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            city: credentials.city,
            country: credentials.country,
        });
        try {
            const response = await fetch(ENDPOINT+"/api/report",
                {   method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: data
                });

            const response2= await fetch(ENDPOINT+"/api/forecast",
            {method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: data});

            const json1 = await response.json();
            const json2=await response2.json();
            setWeatherData(json1);
            set5dayWeatherData(json2);
            setDisplayWeather(1);
        } catch (error) {
            alert(error);
        }
    };
    const [credentials, setCredentials] = useState({
        city: "",
        country: "",
    });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log(credentials, e.target.name);
    };

    return (
        <>
        <div className="flex justify-center">
            <div className="flex-col w-5/12">
            <p className="text-4xl font-medium text-center mt-6 text-blue-500">WeatherForecast</p>
            <form>
                <p className="text-xl mt-8">Enter city:</p>
                <input type="text" placeholder="City" className="my-3 bg-gray-300
                 rounded-md outline-none p-2 w-full" onChange={onChange}
                 value={credentials.city} name="city"/>
                <p className="text-xl mt-7">Enter country:</p>
                <input type="text" placeholder="Country" className="my-3 bg-gray-300
                 rounded-md outline-none p-2 w-full" onChange={onChange}
                 value={credentials.country} name="country"/>
                 <div>
                 <button type="submit" 
                 className="bg-blue-400 rounded-md p-3 w-full mt-2 text-white"
                 onClick={handleSubmit}>
                    Submit</button>
                 </div>
            </form>
            {displayWeather===1 &&
            <WeatherCard weatherData={weatherData}/>}
            </div>
        </div>
        {displayWeather===1 &&
            <WeatherForecastCard weatherData={fivedayWeatherData}/>}
        </>
    );
}

export default NewPreferences;