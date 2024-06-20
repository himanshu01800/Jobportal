import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand " to="/">
                 <span>Job Portal</span>
                </Link>
               
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Carrer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Contact Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
      
        </>
 
  )
}

export default Navbar
