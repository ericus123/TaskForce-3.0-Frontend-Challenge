import React from "react";
import {Row, Col} from "react-bootstrap";
import profile from "../assets/profile.jpg";
import "./styles.scss";

const ProfileCard = () => {
    return (
        <Row className="p-card" style={{background:"#EEF6F6 "}}>
            <Col md className="m-4"><img className="prof-image" src={profile}/></Col>
            <Col md className="m-4">
                <h1 className="m-4">AMANI Eric</h1>
                <div className="m-4" >
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