import React, { useEffect, useState } from "react";
import logo from "./logo.png";
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


  useEffect(()=>{
    getCurrentWeather('Jurong East');
  },[]);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            type="text"
            value={cityInput}
          />
          <h3>{currWeather}</h3>
        </header>
      </div>
    );
}

export default App;
