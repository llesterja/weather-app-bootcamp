import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./App.css";
import axios from "axios";


function App (){

  const [currWeather,setCurrWeather]= useState(null)

  const getCurrentWeather = async(cityName='London',stateCode=0,countryCode=0,limit=5)=>{
    try{
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=fe3a5aa180a67609e1cc3253d5b7f64c`
      )
      console.log(response)
      const {lat,lon}=response.data[0];
      console.log(lat,lon)
      setCurrWeather()
    }catch(err){
      console.log(err);
    };
  };

  useEffect(()=>{
    getCurrentWeather();
  },[]);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input/>
          <h3>{currWeather}</h3>
        </header>
      </div>
    );
}

export default App;
