import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({buttonPresses}) => {
  const { good, neutral, bad } = buttonPresses
  const all = good + neutral + bad
  let average = (good * 1 + bad * -1) / all
  average = isNaN(average) ? 0 : average
  let positive = good / all
  positive = isNaN(positive) ? 0 : positive

  if (all === 0 ) {
    return (
      <div>
        No feedback given
      </div>
    )
  }


  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsTableRow text="Good" value={good} />
          <StatisticsTableRow text="Neutral" value={neutral} />
          <StatisticsTableRow text="Bad" value={bad} />
          <StatisticsTableRow text="All" value={all} />
          <StatisticsTableRow text="Average" value={average} />
          <StatisticsTableRow text="Positive" value={`${positive}%`} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticsTableRow = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1)
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const badFeedback = () => {
    setBad(bad + 1)
  }

  const buttonPresses = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={goodFeedback} text="Good" />
        <Button handleClick={neutralFeedback} text="Neutral" />
        <Button handleClick={badFeedback} text="Bad" />
      </div>
      <Statistics buttonPresses={buttonPresses} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
