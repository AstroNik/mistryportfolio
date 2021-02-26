import React, {Component} from 'react';
import './Navigation.css';
import {Navbar} from 'react-bootstrap';
import {NavTab} from "react-router-tabs";
import SmallNav from "./SmallNav";

class Navigation extends Component {
    render() {
        return (
            <header className="dropshadow">
                <Navbar className="justify-content-center pb-0 text-center" sticky="top">
                    <Navbar.Brand id="nav-title" href="/">Mistry Design</Navbar.Brand>
                </Navbar>
                <Navbar className="text-center p-0 navigation" sticky="top">
                    <NavTab exact to="/" className="w-100 link-click">Projects</NavTab>
                    <NavTab to="/about" className="w-100 link-click">About</NavTab>
                </Navbar>
                <SmallNav/>
            </header>
        );
    }
}

export default Navigation;
