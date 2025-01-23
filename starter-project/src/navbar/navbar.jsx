import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return (
        <nav className="navbar">
        <div className="navbar-left">
            <Link to="/" className="logo">
            Testing
            </Link>
        </div>
        <div className="navbar-center">
            <ul className="nav-links">
            <li>
                <Link to="/ticTac">Test 1: Tictac</Link>
            </li>
            <li>
                <Link to="/test_2">Test 2</Link>
            </li>
            </ul>
        </div>
        <div className="navbar-right">
            <Link to="/" style={{color:'white'}}>
            <FontAwesomeIcon icon={faUserAlt} />
            </Link>
        </div>
        </nav>
    )
}

