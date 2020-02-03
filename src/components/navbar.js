import React from 'react'
import {Link , NavLink , withRouter} from 'react-router-dom'

const Navbar = (props) => {
    return (
       <nav className="nav-wrappeer blue darken-1">
           <div className="container">
               <a className="brand-logo">Poke Times</a>
               <ul className="right">
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/about">About Us</NavLink></li>
                   <li><NavLink to="/contact">Contact Us</NavLink></li>
               </ul>
           </div>
       </nav>
    )
}

export default withRouter(Navbar)
