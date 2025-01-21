import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Navbar from './navbar/navbar';
import TicTac from './components/tic_tac_test/tic_tac';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="content-container">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;

