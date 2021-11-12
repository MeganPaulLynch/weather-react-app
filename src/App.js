import React from "react";
import Weather from "./Weather";
import "./App.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export default function App() {
  return (
    <div className="container App">
      <Weather defaultCity="London" />
      <footer>
        <a href="https://github.com/MeganPaulLynch/weather-react-app">
          Open source code
        </a>{" "}
        by Megan Paul Lynch
      </footer>
    </div>
  );
}
