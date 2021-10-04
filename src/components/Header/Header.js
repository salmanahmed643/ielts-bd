import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink className="header_logo" to="/home"> IELTS BD </NavLink>
                    <Nav className="main_menu">
                        <NavLink to="/home"> Home </NavLink>
                        <NavLink to="/services"> Services </NavLink>
                        <NavLink to="/teachers"> Our Teachers </NavLink>
                        <NavLink to="/about"> About US </NavLink>
                        <NavLink to="/contact"> Contact Us </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;