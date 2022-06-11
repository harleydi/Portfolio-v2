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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}
