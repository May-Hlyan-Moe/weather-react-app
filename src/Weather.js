import React, {useState} from "react";
import './Weather.css';
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function Weather (props) {

    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState(props.city);

    function handleResponse (response) {
        setReady(true);
        setWeatherData({
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            city: response.data.city,
            country: response.data.country,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            pressure: response.data.temperature.pressure,
            description: response.data.condition.description,
            icon: response.data.condition.icon,
        })

    }

    function search () {
    let api = `https://api.shecodes.io/weather/v1/current?query=${city}&key=e8b0a10cf3eacat9055e9544c4bb244o&units=metric`;
    axios.get(api).then(handleResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleCityChange (event) {
        setCity(event.target.value);
    }

    if (ready) {
    return (
        <div className="container weather">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                        </div>
                        <div className="col">
                            <input type="submit" value="Search" className="btn btn-primary "/>
                        </div>
                    </div>
                </div>
            </form>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <WeatherInfo data={weatherData}/>
                    </div>
                    <div className="col-4" id="forecast">
                        <WeatherForecast coordinates={weatherData.coordinates} />
                    </div>
                </div>
            </div> <br />
            <div className="code">
                <a href="https://github.com/May-Hlyan-Moe/weather-react-app">open-sourced code</a> by 
                <a href="https://vocal-sprite-ab24fc.netlify.app/"> May Hlyan Moe</a>
            </div>
        </div>
    )} else {
        search();
        return (
            <div className="icon-spinner">
                <i class="fa-solid fa-spinner fa-spin-pulse" id="spinner"></i>
            </div>
        ) }
}