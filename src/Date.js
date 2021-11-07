import React from "react";

export default function Date(props) {
  return (
    <li id="date-time">
      {props.name} {props.hours}:{props.minutes}
    </li>
  );
}
