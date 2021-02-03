import React, {Component} from 'react';
import './Navigation.css';
import {Navbar} from 'react-bootstrap';
import {NavTab} from "react-router-tabs";

class Navigation extends Component {

    onClick() {

    }

    render() {
        return (
            <header>
                <Navbar className="justify-content-center pb-0" sticky="top">
                    <Navbar.Brand id="nav-title" href="#home">Mistry Design</Navbar.Brand>
                </Navbar>
                <Navbar className="dropshadow text-center pt-0" sticky="top">
                    <NavTab exact to="/" className="w-50 link-click">Projects</NavTab>
                    <NavTab to="/about" className="w-50 link-click">About</NavTab>
                </Navbar>
            </header>
        );
    }
}

export default Navigation;
