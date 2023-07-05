import { useState, createContext } from 'react'
import FormName from './FormName.jsx'
import Todo from './Todo.jsx'
import './App.css'

export const nameState = createContext()

export default function App() {
  const [ name, setName ] = useState('')

  return (
  <>
    <h1 className="title">Welcome { name == '' ? 'Guest' : name }!</h1>
    <h4 className="desk">Welcome To Todo List Application</h4>
    { name == '' ? 
      <nameState.Provider value={ setName }>
        <FormName/>
      </nameState.Provider>
    : <Todo/> }
  </>
 )
}
