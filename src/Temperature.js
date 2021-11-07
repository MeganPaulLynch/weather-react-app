import React from "react";

export default function Temperature() {
  return (
    <div className="col-7">
      <div className="main-weather">
        <span>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="Weather icon"
            id="icon"
          />
        </span>
        <span className="main" id="weatherMeasure">
          18
        </span>
        <span className="unit">Cº</span>
      </div>
    </div>
  );
}
