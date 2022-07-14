import React from 'react'

const DisplayTodo = (props) => {
    console.log(props)
    const{id, todo, onSelect} = props;
  return (
    <>
    <div className='flex'>
    <li>{todo} {id}</li>
    <button onClick={()=>{onSelect(id)}}>X</button>
    </div>
   
    </>
  )
}

export default DisplayTodo