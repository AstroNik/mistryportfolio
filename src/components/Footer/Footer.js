import React, {Component} from 'react';
import './Footer.css';
import {Nav, Navbar} from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Cults from "./cults.png";

class Footer extends Component {
    render() {
        return (
            <footer>
                <Navbar className="justify-content-center uppershadow" fixed="bottom">
                    <Nav>
                        <Nav.Link href="https://www.linkedin.com/in/mihirgmistry/"><LinkedInIcon/></Nav.Link>
                        <Nav.Link href="https://www.instagram.com/mistry.design/"><InstagramIcon/></Nav.Link>
                        <Nav.Link href="https://cults3d.com/en/users/mistry3design/followers"><img className="cults" alt="cults" src={Cults} width="20" height="20"/></Nav.Link>
                    </Nav>
                </Navbar>
            </footer>
        )
    }
}

export default Footer;
