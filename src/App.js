import React, { useEffect, useState } from "react";
import logo from "./photos-sky-during-different-weather-260nw-1899360634.jpg";
import "./App.css";
import axios from "axios";


function App (){
  const [cityInput,setCityInput] = useState("");
  const [currWeather,setCurrWeather]= useState(null);

  const getCurrentWeather = async(cityName='London',stateCode=0,countryCode=0,limit=5)=>{
    try{
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=fe3a5aa180a67609e1cc3253d5b7f64c`
      )
      console.log(response)
      const {lat,lon}=response.data[0];
      console.log(lat,lon)
      await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fe3a5aa180a67609e1cc3253d5b7f64c`
      )
      .then((response)=>{
        const {data:weatherData} = response;
        console.log('weatherdata',weatherData)
        setCurrWeather(weatherData)
      })
    }catch(err){
      console.log(err);
    };
  };
  // Promise.all([
  //   axios.get(
  //       `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=1&appid=fe3a5aa180a67609e1cc3253d5b7f64c`
  //     ),
  //   axios.get('https://myapp.com/users/1'),
  //   // results is an array of results whose elements correspond
  //   // to the elements in the Promise.all parameter array
  // ]).then((results) => {
  //   const [product1, user1] = results;
  //   // Do something with product1 and user1
  // });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCityInput(value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    getCurrentWeather(cityInput);
    setCityInput("");
  };

  useEffect(()=>{
    getCurrentWeather('Jurong East');
  },[]);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Type in a city to get their weather now!</h1>
          <input
            type="text"
            value={cityInput}
            onChange={handleChange}
          />
          <input type="submit" value="Get Weather!" onSubmit={handleSubmit} />
          
          <h3>{currWeather?currWeather.name:""}</h3>
          <h3>{currWeather?currWeather.weather[0].main:""}</h3>
        </header>
      </div>
    );
}

export default App;
