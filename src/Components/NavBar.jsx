import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    
        <header>
            <nav>
                <ul>
                    <Link to="/" >
                    <li>Home</li>
                    </Link>
                    <Link to="/about">
                    <li>About</li>
                    </Link>
                    <Link  to={"/contact"}>
                    <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    
  )
}

export default NavBar