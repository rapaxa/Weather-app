import {MainProps} from "../../types/mainTypes.ts";
import Block from "./Block.tsx";
import ListDays from "./ListDays.tsx";

const Main = ({weatherData}: MainProps) => {

    return (
        <main>
            {weatherData ?
                <>
                    <Block days={weatherData.days}/>
                    <ListDays weatherData={weatherData}/>
                </>

                : '...loading'}

        </main>

    )
}
export default Main
