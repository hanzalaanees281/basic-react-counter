import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  // const addValue = () => {
  //   setCounter(Math.min(20, counter + 1))
  // }
  // const removeValue = () => {
  //   setCounter(Math.max(0, counter - 1))
  // }


  const addValue = () => {
    setCounter((max) => {
      return max < 20 ? counter + 1 : counter
    })
  }
  const removeValue = () => {
    setCounter((min) => {
      return min > 0 ? counter - 1 : counter
    })
  }

  return (
    <>
    <h1>Counter : {counter}</h1>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
