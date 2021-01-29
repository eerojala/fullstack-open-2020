import React from 'react'

const Footer = () => {
  const footerStyle = {
    color: 'green', 
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Created by Eero Ojala</em>
    </div>
  )
}

export default Footer