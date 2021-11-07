import React from "react";

export default function Wind(props) {
  return (
    <div className="col-12 float-left">
      Wind: <span id="windElement">{props.value} </span>mph
    </div>
  );
}
