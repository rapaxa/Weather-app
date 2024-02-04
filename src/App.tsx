import s from './App.module.css'
import Header from "./components/Layout/Header.tsx";
import Main from "./components/Layout/Main.tsx";
import {useEffect, useState} from "react";
import {WeatherData} from "./types/types.ts";
import {fetchData} from "./api/WeatherData.ts";

// import {CheckValueOnServer} from "./api/WeatherData.ts";

function App() {
    const [weatherData, setWeatherData] = useState<WeatherData>()
    const apiKey = import.meta.env.VITE_API_KEY;
    const [location, setLocation] = useState('london')
    const query = `timeline?locations=${location}&aggregateHours=24&iconSet=icons1&unitGroup=metric&contentType=json&key=${apiKey}`
    const url = import.meta.env.VITE_API_URL + query;
    const urlBackground = `url(https://raw.githubusercontent.com/visualcrossing/WeatherIcons/6231688b36311be3ed337868e322258c1cb5f2f3/SVG/2nd%20Set%20-%20Color/${weatherData?.currentConditions.icon}.svg?raw=true\`)`


    useEffect(() => {
        const timerId = setTimeout(() => {
            fetchData(url)
                .then(res => setWeatherData(res))
        }, 1000);

        return () => clearTimeout(timerId);


    }, [location]);

    return (
        <div className={s.container} style={{backgroundImage: urlBackground}}>
            <div className={s.content}>
                {weatherData ?
                    <>
                        <Header setLocation={setLocation} weatherData={weatherData}/>
                        <Main weatherData={weatherData}/>
                    </> : 'loading...'


                }

            </div>
        </div>
    )
}

export default App
