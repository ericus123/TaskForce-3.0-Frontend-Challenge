import React from "react";
import Navigation from "./Navbar";
import RequestCard from "./RequestCard";
import "./styles.scss";
const UpperPage = () => {
    return (
        <div className="up-card" ><Navigation/>
            <RequestCard/>
        </div>
    );
};
export default UpperPage;