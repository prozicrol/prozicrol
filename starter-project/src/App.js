import './App.css';
import React from 'react';
import Home from './Home';
import Navbar from './navbar/navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="content-container">
        <Home />
      </div>
    </div>

  );
}

export default App;

