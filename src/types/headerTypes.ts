import {WeatherData} from "./types.ts";

export interface HeaderProps {
    weatherData: WeatherData;
    setLocation:(location: string) => void;
}