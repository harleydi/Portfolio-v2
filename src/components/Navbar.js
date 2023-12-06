import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.scss';
import About from './About';
import Home from './Home';
import Work from './Work';

export default function Navbar() {
  const [homeActive, setHomeActive] = useState(true)
  const [workActive, setWorkActive] = useState(false)
  const [aboutActive, setAboutActive] = useState(false)
  const [contactActive, setContactActive] = useState(true)

  
  
  useEffect(() => {
    console.log('useEffect')
  }, [])

  const onClickHandler = (e) => {
    console.log(e.target)
  }

  return (
    <div className='navbar'>
      <h4 className='logo'>디즈니</h4>
      <ul className='nav'>
        <li id='navItem' className={homeActive && 'active-link'}><Link to="/">Home</Link></li>
        <li id='navItem' className={workActive && 'active-link'} ><Link to="/work">Projects</Link></li>
        <li name='about' id='navItem' onClick={onClickHandler} className={aboutActive && 'active-link'} ><Link to='/about'>About</Link></li>
        <Link to='/contact'><li id='nav-item' className={contactActive && 'active-link'}>Testing</li></Link>
        {/* <li id='navItem' className={contactActive && 'active-link'} ><Link to="/contact">Contact</Link></li> */}
      </ul>
    </div>
  )
}
