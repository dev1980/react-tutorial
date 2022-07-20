import React from 'react'
import { useSelector } from 'react-redux'
const About = () => {
    const data  = useSelector((state)=> state.reducer.count)
  return (
    <div>
       <h1>About Page</h1>
       <p>count from About: {data}</p>
        </div>
  )
}

export default About