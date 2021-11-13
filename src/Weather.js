import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="box">
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <form id="searchForm">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="explore"
                      placeholder="Enter a city"
                      autocomplete="off"
                      autoFocus="on"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      className="btn btn-primary w-100"
                      value="Search"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      className="btn btn-secondary w-100"
                      value="Current"
                      id="current-location"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-5">
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>Sunday 16:44</li>
                  <li>{weatherData.description}</li>
                </ul>
                <div className="clear-fix">
                  <div className="row detail">
                    <div className="col-12 float-left">
                      Wind: <span>{Math.round(weatherData.wind)} </span>mph
                    </div>
                    <div className="col-12 float-left">
                      Humidity: <span>{weatherData.humidity} </span>%
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="main-weather">
                  <span>
                    <img src={weatherData.icon} alt={weatherData.description} />
                  </span>
                  <span className="main">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit"> Cº</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `31ad48b24814e35a922ce8f9aaefd541`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleWeather);
    return "Loading...";
  }
}
