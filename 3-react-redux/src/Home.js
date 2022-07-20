import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    const value = useSelector((state)=> state.reducer.count)
  const dispatch = useDispatch();
    const btnAdd = ()=>{
        dispatch({
            type: "increment",
        });
    };

    const btnSub = () =>{
        dispatch({
            type: "decrement",
        });
    };

    const increaseByAmount  = () =>{
        dispatch({
            type:"increaseByAmount",
            payload: 10,
        })
    }

  return (
    <div>
        <h2>{value}</h2>
        <button onClick={btnAdd}>Increase</button>
        <button onClick={btnSub}>Decrease</button>
        <button onClick={increaseByAmount}>Increase By Amount</button>
    
    </div>
  )
}

export default Home