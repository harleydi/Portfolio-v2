import React from 'react';
import '../styles/work.scss';
import pv1 from '../images/pfv1.png';
import mw from '../images/musicworld.png';
import ms from '../images/mcts.png';


export default function Work() {
  return (
    <div>
      <h1 className='workHeader'>PROJECTS</h1>
      <div className='container'>
        <div className="card">
          <div className="card-face">
            <img src={mw} alt='pv1' />
          </div>
            <p className='pname'>MUSIC WORLD</p>
          <div className='content'>
            <a className='buttons' href="https://music-world.netlify.app/">Live</a>
            <a className="buttons" href="https://github.com/harleydi?tab=repositories">Github</a>
          </div>
        </div>
        <div className="card">
          <img src={ms} alt='pv1' />
          <p className='pname'>MCTS</p>
            <div className='content'>
              <a className='buttons' href="https://mcts-site.netlify.app/">Live</a>
              <a className="buttons" href="https://github.com/harleydi/MCTS">Github</a>
            </div>
        </div>
        <div className="card">
          <img src={pv1} alt='pv1' />
              <p className='pname'>Portfolio v1</p>
            <div className='content'>
              <a className="buttons" href="https://disneyharley-portfolio2020.netlify.app">Live</a>
              <a className="buttons" href="https://github.com/harleydi/harley-portfolio-2020">Github</a>
            </div>
        </div>
      </div>
    </div>
  )
}
