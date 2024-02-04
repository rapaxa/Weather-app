import {WeatherData} from "../../types/types.ts";
import s from './Main.module.css'
interface MainProps {
    weatherData?: WeatherData;
}
const Main = ({weatherData}: MainProps) => {
    const arrDate = (weatherData?.days || []).map(item => {
        const date = new Date(item.datetime);
        if (!isNaN(date.getTime())) {
            return date.toLocaleDateString('en-En', {weekday: 'long'});
        } else {
            return 'Invalid Date';
        }
    });

    return (
        <main>
                <ul >
                    <li className={s.items}>
                        <div>Day</div>
                        <div>Condition</div>
                        <div>Min°</div>
                        <div>icon</div> {/* Для изображения, если нужно место сохранить */}
                        <div>Max°</div>
                    </li>
                    {weatherData?.days.slice(0, 7).map((item, index) => (
                        <li className={s.items} key={index}>
                            <div className={s.item}>{index === 0 ? 'Today' : arrDate[index] }</div>
                            <div className={s.item}>{item.conditions}</div>
                            <div className={s.item}>{Math.ceil(item.tempmin)}°</div>
                            <div>
                                <img width={30}
                                     src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${item.icon}.png`}
                                     alt=""/>
                            </div>
                            <div className={s.item}>{Math.ceil(item.tempmax)}°</div>
                        </li>
                    ))}
                </ul>
        </main>

    )
}
export default Main
