import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='nav'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

    </nav>
  )
}

export default Navbar