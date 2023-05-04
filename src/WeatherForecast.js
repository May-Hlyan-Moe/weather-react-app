import React, {useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState();

    useEffect (() => {
        setLoaded();
    }, [props.coordinates]);

    function handleResponse (response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="ForecastDay">
                <div className="seven-day">
                    <i class="fa-solid fa-calendar-week"></i> {" "}
                    7-DAY FORECAST 
                </div>
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                            if (index < 7) return(
                            <div className="col" key={index}>
                                <ForecastDay forecast={dailyForecast}/>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    } else {
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let forecastApi = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=e8b0a10cf3eacat9055e9544c4bb244o&units=metric`;
        axios.get(forecastApi).then(handleResponse);

        return (
            <div className="icon-spinner"> 
                <i class="fa-solid fa-spinner fa-spin-pulse" id="spinner" ></i>
            </div>
        )
    }

    
}