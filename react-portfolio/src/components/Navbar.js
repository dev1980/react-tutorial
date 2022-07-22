import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/work'>Work</NavLink>
        <NavLink to='contact'>Contact</NavLink>
    </nav>
  )
}

export default Navbar