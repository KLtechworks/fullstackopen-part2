// 2.18* Data for countries, step 1
import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  // 2.19*: Data for countries, step 2
  const [selectedCountry, setSelectedCountry] = useState(null)
  // 2.20*: Data for countries, step 3
  const [weather, setWeather] = useState(null)

  const apiKey = import.meta.env.VITE_API_KEY 

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  // 2.19*: Data for countries, step 2
  // const handleShow = (country) => {  
  //   setSelectedCountry(country)
  // }

  const matches = search 
  ? countries.filter(country =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
  : []

  // 2.20*: Data for countries, step 3 
  useEffect(() => {
    if (matches.length === 1) {
      handleShow(matches[0])
    }
  }, [matches])

  // 2.20*: Data for countries, step 3 
  const handleShow = async (country) => {
    setSelectedCountry(country)
    const capital = country.capital?.[0] || 'Unknown'
    
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
      )
      setWeather(response.data) 
    } catch (error) {
      console.error('error', error)
      setWeather(null)  
    }
  }

  const displayedCountry = matches.length === 1 ? matches[0] : selectedCountry

  return (
    <div>
      <div>
        find countries <input value={search} onChange={handleSearch} />
      </div>

      {matches.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}

      {/* 2.19*: Data for countries, step 2 */}
      {matches.length > 1 && matches.length <= 10 && (
        <div>
          {matches.map(c => (
            <div key={c.name.common}>{c.name.common}
              <button onClick={() => handleShow(c)}>Show</button>
            </div>

          ))}
        </div>
      )}

      {displayedCountry && (
        <div>
          <h2>{displayedCountry.name.common}</h2>
          <p>Capital: {displayedCountry.capital?.[0] || 'N/A'}</p>
          <p>Area: {displayedCountry.area}</p>
          <h3>Languages:</h3>
          <ul>
            {Object.values(displayedCountry.languages).map(l => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <img src={displayedCountry.flags.png} alt="flag" style={{width: '150px'}} />
            {/* 2.20*: Data for countries, step 3 */}
          {weather ? (
            <div>
              <h3>Weather in {displayedCountry.capital?.[0]}</h3>
              <p>Temperature: {weather.main.temp} °C</p>
              <p>Description: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt="weather" 
                style={{ width: '50px' }} 
              />
            </div>
          ) : (
            <p>Loading weather... or no data</p>
          )}
        </div>
      )}
    </div>
  )

}

export default App



