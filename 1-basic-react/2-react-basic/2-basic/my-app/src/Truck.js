import React from 'react'

const Truck = (props) => {
    console.log(props)
  return (
    <>
    {
        
            <li >{props.truck}</li>
        
    }
    </>
  )
}

export default Truck