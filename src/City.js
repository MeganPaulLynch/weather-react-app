import React from "react";
import Date from "./Date";
import Description from "./Description";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Humidity from "./Humidity";

export default function City(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h1>{props.name}</h1>
        <ul>
          <Date name="Sunday" hours={16} minutes={44} />
          <Description name="Cloudy" />
        </ul>
        <div className="clear-fix">
          <div className="row detail">
            <Wind value={15} />
            <Humidity value={30} />
          </div>
        </div>
      </div>
      <Temperature />
    </div>
  );
}
