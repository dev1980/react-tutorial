import React from 'react'

const Card = ({title, age}) => {
  return (
    <>
    <div className='card'>
    <img src="https://images.unsplash.com/photo-1657557001897-da9ecbd55a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image" />
      <h1>{title}</h1>
      <h2>{age}</h2>
      <p>Enter the correct ReactDOM method to render the React element to the DOM. Enter the correct ReactDOM method to render the React element to the DOM.Enter the correct ReactDOM method to render the React element to the DOM.</p>
      <button>Chat with me</button>
    </div>
    </>
  )
}

export default Card