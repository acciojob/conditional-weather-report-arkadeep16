
import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {

  
  
  const [weatherInput, setWeatherInput] = useState({temperature: 40, conditions: "Sunny"})
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weatherData={weatherInput}/>
    </div>
  )
}

export default App
