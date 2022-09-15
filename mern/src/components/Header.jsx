import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import logo from "./logo/download.jfif";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={logo} width="77px" height="57px" alt="logo"/>
    Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      
    </ul>
    <div className="form-inline my-2 my-lg-0">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="text-decoration-none" to="/"><a className="nav-link">Home<span className="sr-only">(current)</span></a></NavLink> 
      </li>
      <li className="nav-item ">
        <NavLink className="text-decoration-none" to="/about"><a className="nav-link" >About</a></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="text-decoration-none" to="/contact"><a className="nav-link" >Contact</a></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="text-decoration-none" to="/login"><a className="nav-link" >Login</a></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="text-decoration-none" to="/register"><a className="nav-link">Registration</a></NavLink>
      </li>
      
    </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header