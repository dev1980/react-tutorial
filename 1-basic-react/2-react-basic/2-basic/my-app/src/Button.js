import React from 'react'

const Button = () => {
    function display(){
        console.log("click event");
    }
  return (
    <button className='btn' onClick={display}>Click Me</button>
  )
}

export default Button