import {Day} from "../types/types.ts";

const useTemperatureData = (days: Day[], localDate: string, localTime: number) => {
    const data = [];
    let dayIndex = days.findIndex(day => day.datetime === localDate);
    let hourIndex = localTime;
    let count = 0;
    const showAmountHours = 10
    while (count < showAmountHours && dayIndex < days.length) {
        const day = days[dayIndex];
        for (; hourIndex < 24 && count < showAmountHours; hourIndex++) {
            if (day && day.hours && day.hours[hourIndex]) {
                data.push({...day.hours[hourIndex], hour: hourIndex});
                count++;
            }
        }
        // Переход на следующий день
        dayIndex++;
        hourIndex = 0;
    }

    return data;
};
export default useTemperatureData