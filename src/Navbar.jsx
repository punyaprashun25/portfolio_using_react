import React from 'react'
import './Navbar.css';
import logo from './Assets/logo.png';
const Navbar = () => {
  return (
    <nav>
            <img src={logo} alt="logo" className="logo"/>
            <ul>
                <li>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">PORTFOLIO</a>
                    <a href="#">SERVICES</a>
                    <a href="#">HIRE ME</a>
                </li>
            </ul>
        </nav>
  )
}

export default Navbar
