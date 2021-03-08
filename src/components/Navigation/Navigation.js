import React, {Component} from 'react';
import './Navigation.css';
import {Navbar} from 'react-bootstrap';
import {NavTab} from "react-router-tabs";
import SmallNav from "./SmallNav";

class Navigation extends Component {
    render() {
        return (
            <header className="dropshadow">
                <Navbar className="justify-content-center pb-0 pt-0 text-center" sticky="top">
                    <Navbar.Brand id="nav-title" href="/">Mistry Design</Navbar.Brand>
                </Navbar>
                <Navbar className="text-center pt-0 pb-1 navigation" sticky="top">
                    <div className="nav-links">
                        <NavTab exact to="/" className="link-click" activeClassName="link-active">Projects</NavTab>
                        <NavTab to="/about" className="link-click" activeClassName="link-active">About</NavTab>
                    </div>
                </Navbar>
                <SmallNav/>
            </header>
        );
    }
}

export default Navigation;
