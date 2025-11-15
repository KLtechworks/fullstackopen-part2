import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const alreadyAdded = persons.find(person => person.name === newName)

    if (alreadyAdded){
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(showFilter.toLowerCase()))
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  return(
  <div>
    <h2>Phonebook </h2>
    <Filter showFilter={showFilter} setShowFilter={setShowFilter}/>

    <h2>add a new</h2>
      <PersonForm 
          newName={newName}
          newNumber={newNumber}
          setNewName={setNewName}
          setNewNumber={setNewNumber}
          addName={addName}
      />


    <h2>Numbers</h2>
      
    <Persons persons={filteredPersons}/>
  </div>
  )
  
}
export default App