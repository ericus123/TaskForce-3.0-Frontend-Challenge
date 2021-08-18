import React from "react";
import {Navbar,Container,Button} from "react-bootstrap";
import "./styles.scss";
import logo from "..//assets/logo.svg";

const Navigation = () => {
    return (
        <Navbar  collapseOnSelect expand="sm"className="nav-bar">
            <Container>
                <Navbar.Brand href="/" className="brand-logo"><img src={logo}/></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button className="contact-btn"><a rel="norefferrer" className="text-decoration-none" style={{color:"white"}} href="#contact">CONTACT</a></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;