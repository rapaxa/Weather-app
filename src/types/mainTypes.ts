import {Day, WeatherData} from "./types.ts";

export  interface MainProps {
    weatherData?: WeatherData;
}
export interface BlockProps {
    days: Day[] ;
}