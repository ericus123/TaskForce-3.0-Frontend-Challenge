import { Navbar, Container } from "react-bootstrap";
import "./styles.scss";

const Footer = () => {
    return (
        <Navbar  collapseOnSelect expand="sm"className="footer">
            <Container>
              
                <Navbar.Collapse className="justify-content-start" style={{color:"white"}} >
                    <span style={{color:"#ccc"}}>Developed by </span><a style={{color:"white"}} className="text-decoration-none" rel="noreferrer" href="https://www.amanieric.com/" target="_blank"> &nbsp; AMANI Eric</a>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" style={{color:"white"}}>
                    <span style={{color:"#ccc"}}>Designed by </span> &nbsp;<a className="text-decoration-none" style={{color:"white"}} rel="norefferrer noreferrer" href="https://awesomity.rw/" target="_blank"> Awesomity Lab </a> </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Footer;