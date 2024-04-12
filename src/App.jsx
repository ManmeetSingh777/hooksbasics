import { useState,createContext } from 'react'
import UseContext from './assets/components/UseContext'
import './App.css'

export const ToggleTheme = createContext()


export default function App() {
  const [state, setState] = useState(true)
  const handleToggle = ()=>{
    setState(state=>!state)
  }
  return(
    <ToggleTheme.Provider value={state}>
    <button onClick={handleToggle}>Toggle</button>
    <UseContext/>
    </ToggleTheme.Provider>
  )
}

