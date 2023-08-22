import React from "react";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";

const getCurrentWeather = async()=>{
  try{
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=fe3a5aa180a67609e1cc3253d5b7f64c`

    )
  }
}
function App (){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input/>
        </header>
      </div>
    );
}

export default App;
