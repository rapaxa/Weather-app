import {Day} from "../../types/types.ts";
import s from './Block.module.css'
import useTemperatureData from "../../hooks/useTemperature.ts";
import useLocalDate from "../../hooks/useLocalData.ts";


const Block = ({days}: BlockProps) => {
    const localDate = useLocalDate();
    const localTime = new Date().getHours();
    const temperatureData = useTemperatureData(days, localDate, localTime);

    return (
        <div className={s.block}>
            <div className={s.block_items}>
                {temperatureData.map((data, index) => (
                    <div className={s.block_item} key={index}>
                        <p>{data.hour}</p>
                        <img width={30}
                             src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${data.icon}.png`}
                             alt=""/>
                        <p>{Math.ceil(data.temp)}°</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

interface BlockProps {
    days: Day[];
}


export default Block;
