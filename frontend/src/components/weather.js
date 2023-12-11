import React from "react";
import { useState } from "react";


function NewPreferences() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            city: credentials.city,
            country: credentials.country,
        });
        try {
            const response = await fetch("http://localhost:9000/api/auth/report",
                {   method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: data
                });
            const json = await response.json();
            if (json) {
                if (json) {
                    document.write(`Weather in ${json.name}, ${json.sys.country}: ${json.weather[0].main}`);
                 }
            }
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
            <div className="flex-col">
            <p className="text-4xl font-medium ">WeatherForecast</p>
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
            </div>
        </div>
        </>
    );
}

export default NewPreferences;