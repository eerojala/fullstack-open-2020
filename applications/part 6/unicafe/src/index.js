import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import counterReducer from './reducers/counterReducer'

import Statistics from './components/Statistics'

const store = createStore(counterReducer)

const App = () => {
  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => store.dispatch({ type: 'GOOD' })}>Good</button>
        <button onClick={() => store.dispatch({ type: 'NEUTRAL' })}>Neutral</button>
        <button onClick={() => store.dispatch({ type: 'BAD' })}>Bad</button>
      </div>
      <Statistics buttonPresses={store.getState()} />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
