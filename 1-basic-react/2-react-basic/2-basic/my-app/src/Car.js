import React from 'react'

const Car = (props) => {
    console.log(props)
  return (
    <div>Car: {props.model} and its color is {props.color}</div>
  )
}

export default Car