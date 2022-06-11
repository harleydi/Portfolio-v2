import React from 'react';
import '../styles/contact.scss';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import phone from '../images/viber.png';
import email from '../images/telegram.png';

export default function Contact() {
  return (
    <div className='contact'>
      <h1 className='mainTitle'>Contact</h1>
      <form className='form'>
        <label>
          Name: <br/>
          <input type="text" name="name" />
        </label>
        <label>
          Email: <br/>
          <input type="text" name="email" />
        </label>
        <label>
          Message: <br/>
          <textarea />
        </label>
        <div className='btns'>
          <button type='submit'>Send message</button>
          <button type='reset'>Reset</button>
        </div>
      </form>
      <div className='icons'>
        <img src={linkedin} alt='linkedin' />
        <img src={github} alt='github' />
        <img src={twitter} alt='twitter' />
        <img src={phone} alt='phone' />
        <img src={email} className='email' alt='email' />
      </div>
    </div>
  )
}
