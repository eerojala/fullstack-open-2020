import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NameList = ({ namedObjects }) => (
  <ul>
    {namedObjects.map((object) => 
      <li key={object.name}>{object.name}</li>
    )}
  </ul>
)

const CountryInfo = ({ country }) => {
  const api_key = process.env.WEATHER_APP_API_KEY
  
  const [weatherData, setWeatherData] = useState()
  
  const hook = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
      .then(response => {
        setWeatherData(response.data)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <NameList namedObjects={country.languages} />
      <Image src={country.flag} alt={`Flag of ${country.name}`}/>
      <WeatherInfo data={weatherData} />
    </div>
  )
}

const WeatherInfo = ({ data }) => {
  console.log(data)

  if (data === null || data == undefined || data.success === false) {
    return null
  }

  return (
    <div>
      <h2>Weather in {data.location.name}</h2>
      <p>Temperature: {data.current.temperature}C
      </p>
      <Image src={data.current.weather_icons[0]} alt="weather icon" />
      <p>Wind:{data.current.wind_speed}mph direction {data.current.wind_dir}</p>
    </div>
  )
}

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} height="200px" width="200px" />
)

const Display = ({ countries }) => {
  if (countries === null || countries === undefined || countries.length === 0) {
    return <div></div>
  }

  if (countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } else if (countries.length > 1) {
    return (
      <div>
        <NameList namedObjects={countries} />
      </div>
    )
  } else {
    return (
      <div>
        <CountryInfo country={countries[0]} />
      </div>
    )
  }
}

export default Display