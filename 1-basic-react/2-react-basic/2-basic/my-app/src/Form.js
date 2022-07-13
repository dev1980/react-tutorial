import React, {useState} from 'react'

const Form = () => {
const [name, setName] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(`My  name is ${name}`)
    }
  return (
    
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="type some text" 
        onChange={(e)=>{setName(e.target.value)}}
        />
        <input type="submit" />

    </form>
    </>
  )
}

export default Form