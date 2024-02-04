import s from "./Main.module.css";
import {MainProps} from "../../types/mainTypes.ts";

const ListDays = ({weatherData}: MainProps) => {
    const arrDate = (weatherData?.days || []).map(item => {
        const date = new Date(item.datetime);
        if (!isNaN(date.getTime())) {
            return date.toLocaleDateString('en-En', {weekday: 'long'});
        } else {
            return 'Invalid Date';
        }
    });
    return (
        <section>
            <ul className={s.weatherList}>
                <li className={`${s.items}`}>
                    <span className={s.item}>Day</span>
                    <span className={s.item}>Condition</span>
                    <span className={s.item}>Min°</span>
                    <span className={s.item}>Icon</span>
                    <span className={s.item}>Max°</span>
                </li>
                {weatherData?.days.slice(0, 7).map((item, index) => (
                    <li className={s.items} key={index}>
                        <span className={s.item}>{index === 0 ? 'Today' : arrDate[index]}</span>
                        <span className={s.item}>{item.conditions}</span>
                        <span className={s.item}>{Math.ceil(item.tempmin)}°</span>
                        <img className={s.icon}
                             width={30}
                             src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${item.icon}.png`}
                             alt=""
                        />
                        <span className={s.item}>{Math.ceil(item.tempmax)}°</span>
                    </li>
                ))}
            </ul>

        </section>
    )

}
export default ListDays