// const App = (props) => {
//   const { notes } = props
//   // const result = notes.map((note) => <li >{note.content}</li>)

//   return (
//     <div>
//       <h1>Notes</h1>
//       {/* <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>      
//       </ul> */}

//       {/* <ul>
//         {notes.map(note => <li key={note.id}> {note.content}</li>)}
//       </ul> */}
//       <ul>
//         {notes.map((note, i) => <li key={i}> {note.content}</li>)}
//       </ul>
//       {/* <ul>{result}</ul> */}
//     </div>
//   )
// }

// const Note = ({note}) => {
//   return (
//     <li>{note.content}</li>
//   )
// }
// import Note from "./components/Note"

// const App = ({ notes }) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note) => (
//           <Note key={note.id} note={note}/>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value);
    
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App 