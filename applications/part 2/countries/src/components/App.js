import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Input from './Input'
import Display from './Display'



const App = (props) => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <Input label="Find countries" value={filter} onChange={handleFilterChange} />
      <Display countries={filteredCountries} />
    </div>
  )
}

export default App