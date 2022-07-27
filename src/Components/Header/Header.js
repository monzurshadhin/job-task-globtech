import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../../Images/globetech logo.png'
import '../Header/Header.css'
const Header = () => {
    return (
        <div>
             <Navbar expand="lg">
           
                    <Navbar.Brand href="#home"><img className='logo-img' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto link-section">
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/login">Login</Link>

                        </Nav>
                    </Navbar.Collapse>
           
            </Navbar>
        </div>
    );
};

export default Header;