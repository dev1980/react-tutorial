import React, {useState} from 'react'
import DisplayTodo from './DisplayTodo';
const Todos = () => {
    const [task, setTask] = useState("");
    const [data, setData] = useState([]);

    const inputChangeHandler = (e) =>{
        setTask(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        let newData = task;
        setData([...data, newData])
        setTask("")
    }

    const deleteTodo = (a)=>{
       let finalData = data.filter((curEle, index)=>{
        return index !== a
       
       })
       setData(finalData)
    }
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={submitHandler}>
      <input type="text"  onChange={inputChangeHandler} value={task}/>
      <input type="submit" />
      </form>
<div className="container">
{data.map((todo, index)=>{
       return <DisplayTodo key={index} id={index} todo = {todo} onSelect= {deleteTodo}/>
      })}
</div>
     
    </>
  )
}

export default Todos
