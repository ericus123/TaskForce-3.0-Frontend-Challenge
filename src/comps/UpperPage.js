import React from "react";
import Navigation from "./Navbar";
import RequestCard from "./RequestCard";
import "./styles.scss";
const UpperPage = () => {
    return (
        <div style={{backgroundColor:"yellow", width:"100% !important", height:"60vh"}}><Navigation/>
            <RequestCard/>
        </div>
    );
};
export default UpperPage;