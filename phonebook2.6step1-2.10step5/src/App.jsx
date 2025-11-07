// // 2.6: The Phonebook Step 1
// import { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')

//   const addName = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName,
      
//     }
//     setPersons(persons.concat(personObject))
//     setNewName('')
//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>

//       <form onSubmit={addName}>
//         <div>
//           name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
//         </div>
//         <div>                 
//           <button type="submit" >add</button>
//         </div>
//       </form>

//       <h2>Numbers</h2>
//       <div>
//         {persons.map(person => <p key={person.name}>{person.name} </p>)}
//       </div>
//       {/* <div>debug: {newName}</div> */}
//     </div>
//   )
// }

// export default App

// // 2.7: The Phonebook Step 2
// import { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')

//   const addName = (event) => {
//     event.preventDefault()
//     const alreadyAdded = persons.find(person => person.name === newName)

//     if (alreadyAdded){
//       alert(`${newName} is already added to phonebook`)
//       return
//     }

//     const personObject = {
//       name: newName,
      
//     }
//     setPersons(persons.concat(personObject))
//     setNewName('')
//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>

//       <form onSubmit={addName}>
//         <div>
//           name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
//         </div>
//         <div>                 
//           <button type="submit" >add</button>
//         </div>
//       </form>

//       <h2>Numbers</h2>
//       <div>
//         {persons.map(person => <p key={person.name}>{person.name} </p>)}
//       </div>
//       {/* <div>debug: {newName}</div> */}
//     </div>
//   )
// }

// export default App

// // 2.8: The Phonebook Step 3
// import { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-1234567'}
//   ]) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')

//   const addName = (event) => {
//     event.preventDefault()
//     const alreadyAdded = persons.find(person => person.name === newName)

//     if (alreadyAdded){
//       alert(`${newName} is already added to phonebook`)
//       return
//     }
    
//     const personObject = {
//       name: newName,
//       number: newNumber
//     }
//     setPersons(persons.concat(personObject))
//     setNewName('')
//     setNewNumber('')
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>

//       <form onSubmit={addName}>
//         <div>
//           name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
//         </div>
//         <div>
//           number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
//         </div>
//         <div>                 
//           <button type="submit" >add</button>
//         </div>
//       </form>

//       <h2>Numbers</h2>
//       <div>
//         {persons.map(person => <p key={person.name}>{person.name} {person.number} </p>)}
        
//       </div>
//       {/* <div>debug: {newName}</div> */}
//     </div>
//   )
// }

// export default App

// // 2.9*: The Phonebook Step 4
// import { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//   ]) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [showFilter, setShowFilter] = useState('')

//   const addName = (event) => {
//     event.preventDefault()
//     const alreadyAdded = persons.find(person => person.name === newName)

//     if (alreadyAdded){
//       alert(`${newName} is already added to phonebook`)
//       return
//     }
    
//     const personObject = {
//       name: newName,
//       number: newNumber,
//       id: persons.length + 1
//     }
//     setPersons(persons.concat(personObject))
//     setNewName('')
//     setNewNumber('')
//   }

//   const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(showFilter.toLowerCase()))

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <div>filter shown with <input value={showFilter} onChange={(event) => setShowFilter(event.target.value)}/></div>

//       <h2>add a new</h2>

//       <form onSubmit={addName}>
//         <div>
//           name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
//         </div>
//         <div>
//           number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
//         </div>
//         <div>                 
//           <button type="submit" >add</button>
//         </div>
//       </form>

//       <h2>Numbers</h2>
//       <div>
//         {filteredPersons.map(person => <p key={person.name}>{person.name} {person.number} </p>)}        
//       </div>
//       {/* <div>debug: {newName}</div> */}
//     </div>
//   )
// }

// export default App

// 2.10: The Phonebook Step 5
import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
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

  return (
    <div>
      <h2>Phonebook</h2>
      
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
      
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App