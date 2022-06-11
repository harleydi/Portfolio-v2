import React from 'react';
import '../styles/work.scss';
import pv1 from '../images/pv1.png';
import mw from '../images/mw.png';
import ms from '../images/mcts.png';
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <div>
      <h1 className='workHeader'>My Projects</h1>
      <div className='showcase'>
        <div className="card">
          <img src={mw} alt='pv1' />
            <p className="workTitle">Music World</p>
            <p className="techStack">Html | CSS | JS | API</p>
            <div className="buttons">
              <button className="live"><a href='https://music-world.netlify.app/'>Live</a></button>
              <button className="live"><a href='https://github.com/harleydi?tab=repositories'>Github</a></button>
            </div>
        </div>
        <div className="card">
          <img src={ms} alt='pv1' />
            <p className="workTitle">MCTS</p>
            <p className="techStack">React | API </p>
            <div className="buttons">
              <button className="live"><a href="https://mcts-site.netlify.app/">Live</a></button>
              <button className="live"><a href="https://github.com/harleydi/MCTS">Github</a></button>
            </div>
        </div>
        <div className="card">
          <img src={pv1} alt='pv1' />
            <p className="workTitle">Portfolio V1</p>
            <p className="techStack">Html | CSS | JS</p>
            <div className="buttons">
              <button className="live"><a href="https://disneyharley-portfolio2020.netlify.app">Live</a></button>
              <button className="live"><a href="https://github.com/harleydi/harley-portfolio-2020">Github</a></button>
            </div>
        </div>
      </div>
    </div>
  )
}
