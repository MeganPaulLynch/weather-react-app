import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="row">
        <div className="col-5">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              {" "}
              <FormattedDate date={props.data.date} />{" "}
            </li>
            <li>{props.data.description}</li>
          </ul>
          <div className="clear-fix">
            <div className="row detail">
              <div className="col-12 float-left">
                Wind: <span>{Math.round(props.data.wind)} </span>mph
              </div>
              <div className="col-12 float-left">
                Humidity: <span>{props.data.humidity} </span>%
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="main-weather">
            <span>
              <img src={props.data.icon} alt={props.data.description} />
            </span>
            <span className="main">{Math.round(props.data.temperature)}</span>
            <span className="unit"> Cº</span>
          </div>
        </div>
      </div>
    </div>
  );
}
