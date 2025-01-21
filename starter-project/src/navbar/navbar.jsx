import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className="navbar">
        <div className="navbar-left">
            <a href="/" className="logo">
            Testing
            </a>
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
            <a href="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
            </a>
            <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
            </a>
        </div>
        </nav>
    )
}

