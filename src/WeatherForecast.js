import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [received, setReceived] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecast(response) {
    setForecast(response.data.daily);
    setReceived(true);
  }
  if (received) {
    return (
      <div className="Weather-forecast">
        <div className="row mt-2 mb-2">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "31ad48b24814e35a922ce8f9aaefd541";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}
