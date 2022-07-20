import React, {useState, useEffect} from 'react'

const Counter = () => {
   const[state, setState] = useState(0)

   const[text, setText] = useState({data: "type to display text"})

   const[num, setNum] = useState([5,10,20,30])

    function increase(){
       setState(state + 1 )
    }

    function handleChange(e) {
        console.log(e)
        setText({...text, data: e.target.value})
    }
    

let sum = 0;
 num.map((e)=>{
    sum+= e
})

function updateArray() {
    setNum([...num, 10])
    console.log(num)
}
  return (
    <div>
        <h2>{state}</h2>

        <p>{text.data}</p>
       
       <p>Display sum: {sum}</p>
      
        <button onClick={increase}>Incerase</button>
        <input type="text" onKeyUp={handleChange} />
        <button onClick = {updateArray}>Update Array</button>
    </div>
  )
}

export default Counter