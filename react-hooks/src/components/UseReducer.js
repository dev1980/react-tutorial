import React, { useReducer} from 'react'

const reducer = (state, action) =>{
    console.log(action)
switch(action.type){
    case "INCREMENT":
       return {count:state.count + 1, showText: state.showText } 
    case "toggleShowText":
        return {count: state.count, showText: !state.showText}
        default:
            return state;
}
}


const UseReducer = () => {
   const [state, dispath] = useReducer(reducer, {count: 0, showText: true})
//   console.log(state)
   return (
       <>
       <h1>{state.count}</h1>
       <button onClick={()=> {
    dispath({type: "INCREMENT"})
    dispath({type: "toggleShowText"})
       }
        
        }>Click here</button>
    
        {state.showText && <h2>This is a true condition</h2>}
        {/* {showText ? <h2>This is a true condition</h2> : <h1>i am false condition</h1>} */}
    
       </>
      )
    }



// const UseReducer = () => {
// const[count, setCount] = useState(0)
// const [showText, setShowText] = useState(true)
// const increase = ()=>{
//    setCount(count + 1)
// }

//   return (
//    <>
//    <h1>{count}</h1>
//    <button onClick={()=> {
// increase()
// setShowText(!showText)
//    }
    
//     }>Click here</button>

//     {showText && <h2>This is a true condition</h2>}
//     {/* {showText ? <h2>This is a true condition</h2> : <h1>i am false condition</h1>} */}

//    </>
//   )
// }

export default UseReducer