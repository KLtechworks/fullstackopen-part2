import React from 'react'
import phonebook from '../services/phonebook'

const Person = ({person, onDelete}) => {
  const handleDelete = () => {
    if(window.confirm(`Delete ${person.name}?`)){
      phonebook.remove(person.id)
          .then(()=> {
            onDelete(person.id)
          })
    }
  }
  return (
    <p> 
      {person.name} {person.number}
      <button onClick={handleDelete} >Delete</button>
    </p>
  )
}

export default Person