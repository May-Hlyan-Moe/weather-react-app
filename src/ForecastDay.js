import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay (props) {

    function minTemp () {
        let temperature = Math.round(props.forecast.temperature.minimum);
        return `${temperature}°`
    }

    function maxTemp () {
        let temperature = Math.round(props.forecast.temperature.maximum);
        return `${temperature}°`
    }

    function day () {
        let now = new Date(props.forecast.time * 1000);
        let day = now.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }

    return(
            <div className="WeatherForecast">
                <div className="container">
                    <div className="row" id="each-day">
                        <div className="col-4">
                            <span className="forecast-day">
                                {day()}
                            </span>
                        </div>
                        <div className="col-4">
                            <WeatherIcon alt={props.forecast.condition.icon} size={30}/>
                        </div>
                        <div className="col-4">
                            <span className="temp-min">
                                {minTemp()}
                            </span> 
                            <span className="temp-max">
                                {maxTemp()}
                            </span>
                        </div>
                    </div>
                </div>
                <br />         
            </div>
    )
}