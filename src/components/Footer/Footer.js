import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink className="header_logo" to="/home"> IELTS BD </NavLink>
                    <Nav className="main_menu">
                        <NavLink to="/home"> Legal </NavLink>
                        <NavLink to="/service"> Disclaimer </NavLink>
                        <NavLink to="/about"> Privacy policy </NavLink>
                        <NavLink to="/course"> Site Map </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;