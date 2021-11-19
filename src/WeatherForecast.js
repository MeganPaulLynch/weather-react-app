import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [received, setReceived] = useState(false);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    setReceived(false);
  }, [props.coordinates]);
  function handleForecast(response) {
    setForecast(response.data.daily);
    setReceived(true);
  }
  if (received) {
    return (
      <div className="Weather-forecast">
        <div className="row mt-2 mb-2">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
