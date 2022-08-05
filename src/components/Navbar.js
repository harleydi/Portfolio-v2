import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.scss';
import About from './About';
import Home from './Home';
import Work from './Work';

export default function Navbar() {

  

  return (
    <div className='navbar'>
      <h4 className='logo'>디즈니</h4>
      <ul className='nav'>
        <li id='navItem' className='active-link'><Link to="/">Home</Link></li>
        <li id='navItem' ><Link to="/work">Projects</Link></li>
        <li id='navItem' ><Link to='/about'>About</Link></li>
        <li id='navItem' ><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}
