import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { NavLink } from "react-router-dom";
import '../App.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
             AyeshaSiddiqa
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"> 
                <NavLink to="/" className="nav-link active" >Home</NavLink>
              </li>
              <li className="nav-item">
                 <NavLink to="/about" className="nav-link" >About</NavLink>
              </li> 
              <li className="nav-item">
                 <NavLink to="/services" className="nav-link" >Services</NavLink>
              </li> 
              <li className="nav-item">
                 <NavLink to="/contact" className="nav-link" >Contact</NavLink>
              </li>   
            </ul> 
          </div>
        </div>
      </nav>
    </>
  );
}
