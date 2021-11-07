import React from "react";

export default function Humidity(props) {
  return (
    <div className="col-12 float-left">
      Humidity: <span id="humidityElement">{props.value} </span>%
    </div>
  );
}
