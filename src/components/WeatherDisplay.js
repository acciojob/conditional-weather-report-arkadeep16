import React from 'react'


const WeatherDisplay = ({weatherData}) => {
    console.log(weatherData)
  return (
    <>
        <p><span style={
            {
                color: weatherData.temperature > 20 ? "red" : "blue" 
            }
            }>Temperature: {weatherData.temperature}</span></p>
        <p>Conditions: {weatherData.conditions}</p>
    </>
  )
}

export default WeatherDisplay