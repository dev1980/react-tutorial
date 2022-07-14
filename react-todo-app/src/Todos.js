import React, {useState} from 'react'
import DisplayTodo from './DisplayTodo';

const Todos = () => {
    const[todo, setTodo] = useState("");
    const[data, setData] = useState([])

    const inputChangeHandler = (e) =>{
        let newInput = e.target.value;
        setTodo(newInput)
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let newData = [...data, todo]
        setData(newData);
        setTodo("")
    }

    const deleteTodo = (id)=>{
        let finalData = data.filter((curElement, index)=>{
            return index !== id;
        })

        setData(finalData)
    }

  return (
    <>
    <form onSubmit = {onSubmitHandler}>
    <input type="text" onChange={inputChangeHandler} value={todo}/>
    <input type="submit"/>
    </form>

    <div className='display-todo'>
   <ul>
    {
        
        data.map((todo, key)=> {
            
            return <DisplayTodo key={key} todo= {todo} id={key} onSelect={deleteTodo}/>
           
        })
         
    }
    </ul>
    </div>
    
    </>
  )
}

export default Todos