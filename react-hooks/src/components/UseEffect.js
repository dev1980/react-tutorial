import React, {useEffect,useState} from 'react'
const axios = require('axios');

const UseEffect = () => {
    const[count, setCount] = useState(0);
    const[data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
           setData(response.data)
        })
    }, [])


  
  return (
    <>
    <h1>Getting data from API</h1>
    <h2>{count}</h2>
    <button onClick={()=> setCount(count + 1)}>click me</button>

   {
    
    data.map((element)=>{
        return(
            <>
            <div className='card'>
            <p>{element.id}</p>
            <p>{element.name}</p>
            <p>{element.email}</p>
            </div>
            
            </>
        )
        
        
    })
   }
    </>
  )
}

export default UseEffect