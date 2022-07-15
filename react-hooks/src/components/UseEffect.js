import React, {useEffect,useState} from 'react'
const axios = require('axios');

const UseEffect = () => {
    const[count, setCount] = useState(0);
    const[data, setData] = useState("");
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
           setData(response.data[0].email)
        })
    }, [count])
  return (
    <>
    <h1>Getting data from API</h1>
    <h2>{count}</h2>
    <button onClick={()=> setCount(count + 1)}>click me</button>

    <p>My email from API {data}</p>
    </>
  )
}

export default UseEffect