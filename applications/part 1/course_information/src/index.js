import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => (
  <h1>{props.name}</h1>
)

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => 
        <Part name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const Total = (props) => {
  const total = Object.values(props.parts).reduce((accumulator, {exercises}) => accumulator + exercises, 0)

  return <p>Number of exercises {total}</p>
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))