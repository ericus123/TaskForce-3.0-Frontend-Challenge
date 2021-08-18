import { Row } from "react-bootstrap";
import "./styles.scss";
const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div style={{color:"white", fontSize:"2em", textAlign:"center"}}>
                <h2><b>REACH ME</b></h2>
                <br/>
                <Row className="p-2.5">
                    
                    <h5 className="contact-h">Email</h5>
                    
                   
                    <h6 style={{color:"#ccc", fontWeight:"300"}}>amaniericus@gmail.com</h6>
                    
                </Row>
                <Row className="p-2">
                    
                    <h5  className="contact-h">Phone</h5>
                    
                   
                    <h6 style={{color:"#ccc", fontWeight:"300"}}>+(250)783343195</h6>
                    
                </Row>
                <Row className="p-2">
                    
                    <h5 className="contact-h">Profile</h5>
                    
                   
                    <h6><a style={{cursor:"pointer",color:"#ccc", fontWeight:"300"}} target="_blank" rel="noreferrer" href="https://rw.linkedin.com/in/amani-eric" className="text-decoration-none pointer">https://rw.linkedin.com/in/amani-eric</a></h6>
                    
                </Row>
            </div>
        </div>
    );
};
export default Contact;