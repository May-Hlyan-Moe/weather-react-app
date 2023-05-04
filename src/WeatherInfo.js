import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
    return (
        
        <div className="weatherInfo">
                        <span className="city">
                            <i class="fa-solid fa-location-dot"></i>
                            {" "}{props.data.city}
                        </span>,
                        <span className="country"> 
                            {props.data.country}
                        </span>   
                        <div className="now">
                            <i class="fa-regular fa-clock"></i>
                            {" "}<FormattedDate />
                        </div>
                        <br /> <br />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <br /> <br /> <br />
                        <WeatherTemperature celsius={Math.round(props.data.temperature)} />
                    </div>
                    <div className="col-6">
                        <WeatherIcon  alt={props.data.icon} size={160}/>
                    </div>
                </div>
            </div>
            <br />
            <div className="container" id="four-items">
                <div className="row">
                    <div className="col-6" id="each-item">
                        <div className="col" id="number">
                            <div className="description text-capitalize">
                                {props.data.description}
                            </div>
                        </div>
                    </div>
                    <div className="col-6" id="each-item">
                        <div className="col" id="title">
                            <i class="fa-solid fa-wind"></i> {" "}
                            Wind Speed
                        </div>
                        <div className="col" id="number">
                            {Math.round(props.data.wind)} km/h
                        </div>
                    </div>
                    <div className="col-6" id="each-item">
                        <div className="col" id="title">
                            <i class="fa-solid fa-droplet"></i> {" "}
                            Humidity
                        </div>
                        <div className="col" id="number">
                            {props.data.humidity} %
                        </div>
                    </div>
                        <div className="col-6" id="each-item">
                        <div className="col" id="title">
                        <i class="fa-solid fa-temperature-quarter"></i> {" "}
                            Pressure
                        </div>
                        <div className="col" id="number">
                            {props.data.pressure} mb
                        </div>
                    </div>
                    
                </div>
            </div>
                        
                                
                                
            
        </div>
    )

    
}