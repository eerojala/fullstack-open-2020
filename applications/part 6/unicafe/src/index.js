import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import counterReducer from './reducers/counterReducer'

import Button from './components/Button'
import Statistics from './components/Statistics'

const store = createStore(counterReducer)

const App = (props) => {
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  // const goodFeedback = () => {
  //   setGood(good + 1)
  // }

  // const neutralFeedback = () => {
  //   setNeutral(neutral + 1)
  // }

  // const badFeedback = () => {
  //   setBad(bad + 1)
  // }

  // const buttonPresses = {
  //   good: good,
  //   neutral: neutral,
  //   bad: bad
  // }

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
      <Statistics buttonPresses={store.getState()} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
