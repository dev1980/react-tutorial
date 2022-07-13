import React from 'react'

const DisplayTodo = ({id, todo, onSelect}) => {
  return (
    <>
      <div className="row">
        <span>{todo}</span>
        <button onClick={()=> onSelect(id)}>X</button>
      </div>
    </>
  )
}

export default DisplayTodo
