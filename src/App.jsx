
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import ErrorScreen from './components/ErrorScreen'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  //Hacer la petición a la API USESTATE, USEEFFECT Y AXIOS
  //Para guardar la informacion de la location de la API
  const [location, setLocation] = useState()
  // Para guardar la informacion del INput
  const [searchInput, setSearchInput] = useState('')
  // Para guardar las sugerencias de la API
  const [suggestedList, setSuggestedList] = useState()
  // Para indicar si es que hay un error
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber()
    if(searchInput){
      id = searchInput
    }


    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
        })
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }

  const handleChange = e => {

    if(e.target.value === '') {
      return setSuggestedList()
    }
    else{
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

      axios.get(URL)
        .then(res => setSuggestedList(res.data.results))
        .catch(err => console.log(err))
    }
  }
  
  


  return (
    <div className="App">
      <h1>Rick And Morty</h1>
        <form onSubmit={handleSubmit}>
          <input
            id='idLocation'
            placeholder='Enter another number from 1 to 126' type="text" 
            onChange={handleChange}
          />
          <button>Search</button>
          <FilterList 
            suggestedList = {suggestedList}
            setSearchInput = {setSearchInput}
          />
        </form>
      
      {
        hasError?
          <ErrorScreen/>
        :
        <>
          <div>
            <LocationInfo location={location} />
              <div>
                {
                  location?.residents.map(url => (
                    <CardResident
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </div>
        </>   
      }
    </div>   
  )
}

export default App
