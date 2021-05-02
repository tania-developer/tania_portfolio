import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './HeaderNav.css'

const HeaderNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: '#153956'}}>             
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto pr-5 py-3 ">
                        <Link to="/" className="mr-4 nav">Home</Link>
                        <Link to="/about" className="mr-4 nav">About</Link>
                        <Link to="/portfolio" className="mr-4 nav">Portfolio</Link>
                        <Link to="/blog" className="mr-4 nav">Blog</Link>
                        <Link to="/contact" className="mr-4 nav">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default HeaderNav;