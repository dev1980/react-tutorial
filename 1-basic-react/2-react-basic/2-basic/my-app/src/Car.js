import React from 'react'

const Car = (props) => {

    const {model, color} = props
  return (
    <>
    <div>Car: {model} and its color is {color}</div>
    
    </>
  )
  
}



export default Car