import React, {useState} from 'react'

// const UseState = () => {
//     // let count = 2;
//     const[count, setCount] = useState(0);

//     const increase = ()=>{
//         setCount(count + 1)
//         console.log(count)
//     }

//   return (
//     <>
//     <h1>{count}</h1>

//     <button onClick={increase}>Increse</button>

//     </>
//   )
// }




const UseState = () => {
  const[inputValue, setInputValue] = useState("")

    const getData = (e) =>{
        let newData = e.target.value;

        setInputValue(newData)
        console.log(newData)
    }
  return (
    <>
    <input type="text" placeholder='input some text' onChange={getData} />
    <p>{inputValue}</p>
    </>
  )
}

export default UseState;

