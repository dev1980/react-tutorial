import React from 'react'

const Navbar = () => {
    const x = 5;
  return (
    <div>
        <header>
        

<h1> AFASDFAD {(x) < 10 ? "Hello" : "Goodbye"}</h1>;
        <h1>Logo</h1>
        <nav className='nav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Facebook</li>
                <li>Youtube</li>
                </ul>
        </nav>
        </header>
    </div>
  )
}

export default Navbar