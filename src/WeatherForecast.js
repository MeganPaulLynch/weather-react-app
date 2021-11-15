import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleForecast(response) {
    console.log(response.data);
  }
  let apiKey = "31ad48b24814e35a922ce8f9aaefd541";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleForecast);
  return (
    <div className="Weather-forecast">
      <div className="row mt-2 mb-2">
        <div className="col">
          <div className="weather-forecast-day">Mon</div>
          <WeatherIcon code={"01d"} size={32} />
          <span className="weather-forecast-day-max">15º</span>
          <span className="weather-forecast-day-min"> 10º</span>
        </div>
      </div>
    </div>
  );
}
