import React from 'react'

const Form = ({ handleSubmit, handleValueChange, value }) => (
  <form onSubmit={handleSubmit}>
    <input value={value} onChange={handleValueChange} />
    <button type="submit">Save</button>
  </form>
)

export default Form