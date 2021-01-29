import React from 'react'
import StatisticsTableRow from './StatisticsTableRow'

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

export default Statistics