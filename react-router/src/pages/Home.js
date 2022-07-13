import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
const Home = () => {
const[count, setCount] = useState(0)
let increse = ()=>{
setCount(count+1)
}

let decrease = () =>{
    setCount(count - 1)
}
let reset = () =>{
    setCount(0)
}
  return (
    <>
    <Navbar />
    <div className='main'>
    <h1>Coutner APP</h1>
    <p>{count}</p>
    <button onClick={increse}>+</button>
    <button onClick={reset}> Reset</button>
    <button onClick={decrease}>-</button>
    <Outlet />
    <Footer />
    </div>
    </>
  )
}

export default Home