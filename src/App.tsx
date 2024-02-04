import s from './App.module.css'
import Header from "./components/Layout/Header.tsx";
import Main from "./components/Layout/Main.tsx";
import {useEffect, useState} from "react";
import {WeatherData} from "./types/types.ts";
import Block from "./components/Layout/Block.tsx";
import {fetchData} from "./api/WeatherData.ts";

// import {CheckValueOnServer} from "./api/WeatherData.ts";

function App() {
    const [weatherData, setWeatherData] = useState<WeatherData>()
    const apiKey = '6Z9VYT5SQDUVHYCL4NRW7XL4T'; // Замените YOUR_API_KEY на ваш ключ API
    const [location, setLocation] = useState('london')

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/timeline?locations=${location}&aggregateHours=24&iconSet=icons1&unitGroup=metric&contentType=json&key=${apiKey}`;
    const urlBackground = `url(https://raw.githubusercontent.com/visualcrossing/WeatherIcons/6231688b36311be3ed337868e322258c1cb5f2f3/SVG/2nd%20Set%20-%20Color/${weatherData?.currentConditions.icon}.svg?raw=true\`)`
    // useEffect(() => {
    //     // Очистка таймера
    // }, [debouncedValue]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            fetchData(url)
                .then(res => setWeatherData(res))
        }, 1000); // Задержка 500 мс

        return () => clearTimeout(timerId);


    }, [location]);

    return (
        <div className={s.container} style={{backgroundImage: urlBackground}}>
            <div className={s.content}>
                {weatherData ?
                    <>
                        <Header setLocation={setLocation} weatherData={weatherData}/>
                        <Block days={weatherData.days}/>
                        <Main weatherData={weatherData}/>
                    </> : 'loading...'


                }

            </div>
        </div>
    )
}

export default App
