
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [option, setOption] = useState('')

  function handle1(){
    setOption("Option 1")
  }

  function handle2(){
    setOption("Option 2")
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
          <h1>Parent Component</h1>
          <div className="child1">
            <h2>Child Component 1</h2>
            <button onClick={handle1}>Option 1</button>
          </div>
          <div className="child2">
            <h2>Child Component 2</h2>
            <button onClick={handle2}>Option 2</button>
          </div>

          <p>Selected Option : {option}</p>
    </div>
  )
}

export default App
