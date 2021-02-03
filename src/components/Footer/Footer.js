import React, {Component} from 'react';
import './Footer.css';
import {Nav, Navbar} from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

class Footer extends Component {
    render() {
        return (
            <footer>
                <Navbar className="justify-content-center uppershadow" fixed="bottom">
                    <Nav className="mr-auto">
                        <Nav.Link href="#linkedin"><LinkedInIcon/></Nav.Link>
                        <Nav.Link href="#instagram"><InstagramIcon/></Nav.Link>
                        <Nav.Link href="#twitter"><TwitterIcon/></Nav.Link>
                    </Nav>
                </Navbar>
            </footer>
        )
    }
}

export default Footer;
