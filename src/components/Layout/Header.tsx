import {WeatherData} from "../../types/types.ts";
import s from './Header.module.css'
import {ChangeEvent} from "react";
interface HeaderProps {
    weatherData: WeatherData;
    setLocation:(location: string) => void;
}

const Header = ({weatherData,setLocation}: HeaderProps) => {
    const handleInput = (e :ChangeEvent<HTMLInputElement>) =>{
        setLocation ( e.target.value)
    }
    return (
        <header>
            <h1 className={s.address}>{weatherData?.resolvedAddress}</h1>
            <input type="text"  onChange={handleInput}/>
            <p className={s.temp}>{(Math.ceil(weatherData?.currentConditions.temp))}°</p>
                {weatherData?.days.map((item, index) => (
                    index === 0 ?
                        <div key={index}>
                            <p>Max.:{Math.ceil(item.tempmax)}° , Min.:{Math.ceil(item.tempmin)}°</p>
                        </div>
                        : null
                ))}

        </header>
    )
}
export default Header