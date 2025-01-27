import React from 'react';
import Navbar from '../../navbar/navbar';
import Game from './squeare';
import './squeare.css'


const TicTac = () => (
  <div >
    <Navbar />
    <div className='center-container-tic-tac'>
      <h2 className='title'>Tictac test</h2>
      <Game />
    </div>
  </div>
);

export default TicTac;


