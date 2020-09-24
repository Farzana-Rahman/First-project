import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/img1.png';
import Logo2 from '../images/image.png';

class Navbar extends Component {
    render() {
        return (
           

                <nav className="navbar navbar-expand-lg">  

                 
                        <a className="navbar-brand">
                            <img src={Logo} width="45" height="45" alt=" "></img>
                            COVID-19 TRACKER
                        </a>

                  <ul className="navbar-nav ml-auto">
                       <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Home</NavLink>
                       </li>

                       <li className="nav-item">
                            <NavLink exact className="nav-link" to="/analytics">Analytics</NavLink>
                       </li>

                       <li className="nav-item">
                            <NavLink exact className="nav-link" to="/details">What is COVID-19</NavLink>
                       </li>

                       <li className="nav-item">
                            <NavLink exact className="nav-link" to="/prevention">Prevention</NavLink>
                       </li>

                       <li className="nav-item">
                            <NavLink exact className="nav-link" to="/about">About</NavLink>
                       </li>
                       <li className="nav-item">
                            <NavLink exact className="nav-link" to="/prediction"><img src={Logo2} width="35" height="35" alt=" "></img></NavLink>
                       </li>

                   </ul>
          
                   


                </nav>
                

            
        );
    }
}

export default Navbar;