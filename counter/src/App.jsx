import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter,setCounter]=useState(15)

  // let counter=15

    const addvalue=() => {
    counter += 1
    if(counter > 20){
      counter = 20
    }
    // console.log(counter)
    setCounter(counter);
    }

    const removevalue=() => {
    counter -= 1
    if(counter<0){
      counter = 0
    }
    setCounter(counter);
    }

  return (
    <>
      <h1>chai aor react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addvalue}
      >add value</button>
      <br />
      <button
      onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
