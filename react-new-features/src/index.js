import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


 const NoteApp = () => {
//   const noteData = JSON.parse(localStorage.getItem('notes'))
  const [notes, updateNotes] = useState([])
  const [title, updateTitle] = useState('')
  const [body, updateBody] = useState('')

  const addNote = (e) =>{
    e.preventDefault()
    updateNotes([
      ...notes,
      {
        title, 
        body
      }
    ])
    updateTitle('')
    updateBody('')
  }

  const removeNote = (title) =>{
    updateNotes(notes.filter((note) => note.title !== title))
  }

  useEffect(()=>{
    const noteData = JSON.parse(localStorage.getItem('notes'))
    if(noteData) {
      updateNotes(noteData)
    }
  }, [])


  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])
  
  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) =>(
       <Note key={note.title} note={note} removeNote={removeNote}/>
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => updateTitle(e.target.value) }/>
        <textarea value={body} onChange={(e) =>updateBody(e.target.value)}/>
        <button>Add note</button>
      </form>
    </div>
  )
}


const Note = ({note, removeNote}) =>{
  useEffect(()=>{
    console.log('Setting up effect!')

    return ()=>{
      console.log('Cleaning up effect!')
    }
  }, [])
  return (
    <div >
      <h3>{note.title}</h3>     
      <p>{note.body}</p>     
      <button onClick={() =>removeNote(note.title)}>X</button>
    </div>
  )
}
// const App = (props)=> {
//   const [count, updateCount] = useState(props.count)
//   const [text, updateText] = useState('test')

//   useEffect(() =>{
//     console.log('useEffect only run once')
//   }, [])

//   useEffect(() =>{
//     console.log('useEffect ran')
//     document.title = count
//   }, [count])
//   return (
//     <div>
//       <p>This current {text || 'count'} is {count}</p>
//       <button onClick={()=>updateCount(count + 1)}>+1</button>
//       <button onClick={()=>updateCount(props.count)}>Reset</button>
//       <button onClick={()=>updateCount(count - 1)}>-1</button>
//       <input onChange={(e)=>updateText(e.target.value)} value={text}/>
//     </div>
//   )
// }

ReactDOM.render(<NoteApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
