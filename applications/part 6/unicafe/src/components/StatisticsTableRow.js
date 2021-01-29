import React from 'react'

const StatisticsTableRow = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default StatisticsTableRow