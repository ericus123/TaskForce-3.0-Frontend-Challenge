import {Row, Col} from "react-bootstrap";
import profile from "../assets/profile.jpg";

const ProfileCard = () => {
    return (
        <Row className="" style={{background:"#EEF6F6 "}}>
            <Col className="m-5"><img style={{maxHeight:"70vh"}} src={profile}/></Col>
            <Col className="m-5">
                <h1 className="m-5">AMANI Eric</h1>
                <div className="m-5" >
                    <h4>Skills</h4>
                    <ul>
                        <li>Fullstack Software Development</li>
                        <li>SCRUM Methodology</li>
                        <li>Test Driven Development</li>
                        <li>Source Control Management</li>
                        <li>Software Deployment</li>
                    </ul>
                </div>
             
            </Col>
        </Row>
    );
};
export default ProfileCard;