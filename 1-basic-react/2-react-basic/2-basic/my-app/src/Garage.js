import React from 'react'
import Truck from './Truck'
const Garage = () => {
    const trucks = ["Ford", "BMW", "audi", "toyota"]
  return (
    <>
    <ul>
    {
        trucks.map((truck, index)=> <Truck key={index} truck= {truck} />)
    } 
    </ul>
    </>
  )
}

export default Garage