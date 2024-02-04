export interface CurrentConditions {
    datetime: string;
    temp: number;
    feelslike: number;
    humidity: number;
    dew: number;
    precip: number;
    precipprob: number;
    snow: number;
    snowdepth: number;
    windgust: number;
    windspeed: number;
    winddir: number;
    pressure: number;
    visibility: number;
    cloudcover: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    conditions: string;
    icon: string;
}

export interface WeatherData {
    queryCost: number;
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: number;
    description: string;
    days: Array<Day>;
    currentConditions: CurrentConditions;
}

export interface Day {
    tempmax: number,
    tempmin: number,
    datetime:string,
    conditions:string,
    feelslikemax: number,
    feelslikemin: number,
    visibility: number,
    icon: string
    hours:Array<Hours>
}
export interface Hours {
    datetime:string,
    temp:number,
    icon:string
}
