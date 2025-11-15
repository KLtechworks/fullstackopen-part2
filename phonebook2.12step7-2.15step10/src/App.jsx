import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebook from './services/phonebook'

// 2.12: The Phonebook step 7
// const baseUrl = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState('')

  // 2.12: The Phonebook step 7
  // useEffect(() => {
  //   axios
  //     .get(baseUrl)
  //     .then(response => {
  //         setPersons(response.data)
  //     })
  // },[])

  // 2.13: The Phonebook step 8
  useEffect(() => {
    phonebook
      .getAll()
      .then(response => {setPersons(response)})
  },[])

  const addName = (event) => {
    event.preventDefault()
    const alreadyAdded = persons.find(person => person.name === newName)

    // 2.12: The Phonebook step 7 to 2.14 step 9
    // if (alreadyAdded){
    //   alert(`${newName} is already added to phonebook`)
    //   return
    // }

    // 2.15*: The Phonebook step 10
    if(!alreadyAdded) {
      const personObject = { name: newName, number: newNumber}
      phonebook.create(personObject).then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      })
      return 
    }

    if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
      const updatedPerson = { ...alreadyAdded, number: newNumber }

      phonebook.update(alreadyAdded.id, updatedPerson)
                .then(returnedPerson => {
                  setPersons(persons.map(p => p.id !== alreadyAdded.id? p : returnedPerson))
                  setNewName('')
                  setNewNumber('')
                })
    }
    
    // 2.12: The Phonebook step 7 to 2.14 step 9
    // const personObject = {
    //   name: newName,
    //   number: newNumber,
    //   // id: persons.length + 1
    // }

    // 2.12: The Phonebook step 7
    // axios
    //   .post(baseUrl, personObject)
    //   .then(response => {
    //     setPersons(persons.concat(response.data))
    //     setNewName('')
    //     setNewNumber('')
    //   })

    // 2.13: The Phonebook step 8
    // phonebook
    //   .create(personObject)
    //   .then(response => {
    //   setPersons(persons.concat(response))
    //   setNewName('')
    //   setNewNumber('')
    // })
    
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(showFilter.toLowerCase()))

  // 2.14: The Phonebook step 9
  const deletePerson = (id) => {
      setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
  }

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
    <Persons persons={filteredPersons} onDelete={deletePerson}/>
  </div>
  )
  
}
export default App