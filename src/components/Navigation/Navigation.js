import React, {Component} from 'react';
import './Navigation.css';
import {Nav, Navbar} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <header>
                <Navbar className="justify-content-center" sticky="top">
                    <Navbar.Brand id="nav-title" href="#home">Mistry Design</Navbar.Brand>
                </Navbar>
                <Navbar className="justify-content-around dropshadow" sticky="top">
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Navbar>
            </header>
        );
    }
}

export default Navigation;
