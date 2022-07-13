import React, {useState} from 'react'
import Blog from './Blog'
import About from './About'
import Contact from './Contact'
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
    <div className='main'>
    <h1>Coutner APP</h1>
    <p>{count}</p>
    <button onClick={increse}>+</button>
    <button onClick={reset}> Reset</button>
    <button onClick={decrease}>-</button>
    
    </div>
    <About />
    <Blog />
    <Contact />
    </>
  )
}

export default Home