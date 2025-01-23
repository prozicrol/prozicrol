import React from 'react';
import Navbar from '../../navbar/navbar';
import Board from './squeare';

const TicTac = () => (
  <div >
    <Navbar />
    <div className='center-container'>
      <h2>Tictac test</h2>
      <Board />
    </div>
  </div>
);

export default TicTac;

