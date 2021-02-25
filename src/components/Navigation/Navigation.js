import React, {Component} from 'react';
import './Navigation.css';
import {Navbar} from 'react-bootstrap';
import {NavTab} from "react-router-tabs";
import {connect} from "react-redux";

class Navigation extends Component {
    render() {
        const {auth} = this.props;

        if(!auth.uid) {
            return (
                <header className="dropshadow">
                    <Navbar className="justify-content-center pb-0 text-center" sticky="top">
                        <Navbar.Brand id="nav-title" href="/">Mistry Design</Navbar.Brand>
                    </Navbar>
                    <Navbar className="text-center p-0 navigation" sticky="top">
                        <NavTab exact to="/" className="w-100 link-click">Projects</NavTab>
                        <NavTab to="/about" className="w-100 link-click">About</NavTab>
                    </Navbar>
                </header>
            );
        } else {
            return (
                <header className="dropshadow">
                    <Navbar className="justify-content-center pb-0 text-center" sticky="top">
                        <Navbar.Brand id="nav-title" href="/">Mistry Design</Navbar.Brand>
                    </Navbar>
                    <Navbar className="text-center pt-0" sticky="top">
                        <NavTab exact to="/" className="w-50 link-click">Projects</NavTab>
                        <NavTab to="/about" className="w-50 link-click">About</NavTab>
                        <NavTab to="/addProject" className="w-50 link-click">Add Projects</NavTab>
                    </Navbar>
                </header>
            );
        }


    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null)(Navigation);
