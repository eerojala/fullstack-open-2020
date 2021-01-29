import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Anecdote = ({ text, points }) => {
  return (
    <div>
      <p>{text}</p>
      <p>Has {points} votes</p>
    </div>
  )
}

const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
)

const App = ({anecdotes}) => {
  const initialPoints = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(initialPoints)
  const [mostPointsIndex, setMostPointsIndex] = useState(0)

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1
    const maxIndex = pointsCopy.indexOf(Math.max(...pointsCopy))

    setPoints(pointsCopy)
    setMostPointsIndex(maxIndex)
  }


  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote text={anecdotes[selected]} points={points[selected]}/>
        <Button onClick={handleVote} label="Vote" />
        <Button onClick={handleNextClick} label="Next anecdote"/>
      </div>
      <div>
        <h1>Anecote with most votes</h1>
        <Anecdote text={anecdotes[mostPointsIndex]} points={points[mostPointsIndex]}/>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);


