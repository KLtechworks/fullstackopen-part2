import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebook from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  // 2.13: The Phonebook step 8
  useEffect(() => {
    phonebook
      .getAll()
      .then(response => {setPersons(response)})
  },[])

  const addName = (event) => {
    event.preventDefault()
    const alreadyAdded = persons.find(person => person.name === newName)
    
    // 2.15*: The Phonebook step 10
    if(!alreadyAdded) {
      const personObject = { name: newName, number: newNumber}
      phonebook.create(personObject).then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        // 2.16: Phonebook step 11
        setSuccessMessage(`Added ${newPerson.name}`)
        setIsError(false)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
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
                  //2.16: Phonebook step 11
                  setSuccessMessage(`Updated ${returnedPerson.name} 's number`)
                  setIsError(false)
                  setTimeout(() => setSuccessMessage(null), 5000)
                })
                .catch(error => {
                  setSuccessMessage(`Information of ${alreadyAdded.name} has already been removed from server`)
                  setIsError(true)
                  setTimeout(() => setSuccessMessage(null), 5000)
                  setPersons(persons.filter(p => p.id !== alreadyAdded.id))
                });
                
    }   
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(showFilter.toLowerCase()))

  // 2.14: The Phonebook step 9
  const deletePerson = (id) => {
      setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
  }

  return(
  <div>
    <h2>Phonebook </h2>
    {/* 2.16: Phonebook step 11 */}
    <Notification message={successMessage} type={isError? 'error' : 'success'} />
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
