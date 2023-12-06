import React from 'react';
import '../styles/work.scss';
import mw from '../images/musicworld.png';
import ms from '../images/mcts.png';
import Workcard from './Workcard';
import { MCTS, MusicWorld, Pv1 } from '../PortfolioData'


export default function Work() {
  return (
    <div>
      <h1 className='workHeader'>PROJECTS</h1>
      <div className='container'>
        <Workcard data={MusicWorld} />
        <Workcard data={MCTS} />
        <Workcard data={Pv1} />
      </div>
    </div>
  )
}
