import React from 'react';
import './App.css';

const divStyle = {
    color:'white'
};

class About extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>Test 2</p>
                </main>
                <div className="App">
                <header className="App-header">
                <p>
                    Guille react testing area
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                </header>
            </div>
            </div>
            
        )
    }
}



export default About;