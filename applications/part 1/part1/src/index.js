import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}


const App = (props) => {
  const [value, setValue] = useState(44)

  const setToValue = (newValue) => {
    return () => {
      setValue(newValue)
    }
  }
  

  return (
    <div>
      {value}
      <button onClick={setToValue(100)}>hundred</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value -1)}>decrease by one</button>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
