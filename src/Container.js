import React from "react";
import Contact from "./comps/Contact";
import Data from "./comps/Data";
import DataContinent from "./comps/DataContinents";
import Footer from "./comps/Footer";
import Navigation from "./comps/Navbar";
import ProfileCard from "./comps/ProfileCard";
import RequestCard from "./comps/RequestCard";
import "./styles/index.scss";


const Container = () => {
    return (
        <div className="">
            <div className="upper-page">
                <Navigation/>
                <RequestCard/>
            </div>
            <Data/>
            <DataContinent/>
            <ProfileCard/>
            <Contact/>
            <Footer/>
        </div>
    );
};
export default Container;