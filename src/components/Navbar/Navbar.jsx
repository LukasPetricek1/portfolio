import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <a href="/#home"><h1>LP</h1></a>
        </div>
        <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#services">Services</a></li>
        </ul>
        <div className="navbar__sign">
            <a href="/contact">
            <button type="button" className="navbar__sign-button">Get in touch</button>
            </a>
        </div>
    </nav>
  )
}

export default Navbar