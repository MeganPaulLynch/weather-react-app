import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = `31ad48b24814e35a922ce8f9aaefd541`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCitySearch(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="box">
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter a city"
                      autocomplete="off"
                      autoFocus="on"
                      onChange={handleCitySearch}
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
                    />
                  </div>
                </div>
              </form>
            </div>
            <Weatherinfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
