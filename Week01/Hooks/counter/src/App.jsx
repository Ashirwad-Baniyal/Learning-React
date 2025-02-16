import { useState } from 'react' //Hooks comes from this
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
/*   In React, state variables are used to manage dynamic data that should cause a re-render when changed.
     whenever we use useState (it can take any data type and function(not good to use)) and return an array first one is the value that usestate contain second one is a function that will be applied on it.
*/
  const addValue=()=>{
    if(counter<20){
    setCounter(++counter);
     console.log(counter);
  }
}
  const removeValue=()=>{
    if(counter>0){
    setCounter(--counter);
     console.log(counter);
  }
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value:{counter}</h2>
     <h3>Minimum limit:0 | Maximum limit:20</h3>
     <button 
     onClick={addValue}
     >Add Value</button>
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
