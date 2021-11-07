import React from "react";
import Form from "./Form";
import City from "./City";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="card">
          <div className="card-body">
            <Form />
            <City name="London" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
