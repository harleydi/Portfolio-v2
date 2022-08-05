import React from 'react';
import '../styles/sidenav.scss';
import Css from '../images/css-3.png';
import Twitter from '../images/twitter.png';
import LinkedIn from '../images/linkedin-logo.png';
import Github from '../images/github.png';
import Sass from '../images/sass.png';

export default function Sidenav() {
  return (
    <div className='sidemain'>
      <div className="sidenav">
        <a href="https://twitter.com/bx_giannis"><img src={Twitter} alt='Twitter icon' /></a>
        <a href="https://www.linkedin.com/in/disney-harley-a430a4137/"><img src={LinkedIn} alt='LinkedIn icon' /></a>
        <a href="https://github.com/harleydi"><img src={Github} alt='Github Icon' /></a>
      </div>
    </div>
  )
}

