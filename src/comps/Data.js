/* eslint-disable react/prop-types */
import React from "react";
import {Row, Container, Col} from "react-bootstrap";
import { formatNumber } from "../helpers";
import "./styles.scss";
const Data = ({countryData,vaccineCountryData}) => {

    return (
        <Container className="data">

            <Row className=" data-row-1">
                <h1>{formatNumber(countryData.cases)}</h1>
                <span className="h5">Cummulatevely</span>
            </Row>
    
            <Row className="data-row-2 justify-content-center">
                <Col className="data-col m-auto">
                    <h1>-</h1>
                    <span>Tests</span>
                    <h3>{formatNumber(countryData.tests)}</h3>
                </Col>
                <Col className="data-col m-auto">
                    <h1>{formatNumber(countryData.todayCases)}</h1>
                    <span>Positive Cases</span>
                    <h3>{formatNumber(countryData.cases)}</h3>
                </Col>
                <Col className="data-col m-auto">
                    <h1>{formatNumber(countryData.todayCases)}</h1>
                    <span>Hospitalized</span>
                    <h3>{formatNumber(countryData.active)}</h3>
                </Col>
                <Col className="data-col m-auto">
                    <h1>{formatNumber(countryData.todayRecovered)}</h1>
                    <span>Recovered</span>
                    <h3>{formatNumber(countryData.recovered)}</h3>
                </Col>
             
                <Col className="data-col m-auto">
                    <h1>{formatNumber(countryData.todayDeaths)}</h1>
                    <span>Deaths</span>
                    <h3>{formatNumber(countryData.deaths)}</h3>
                </Col>
                {vaccineCountryData?.timeline ? 
                    <Col className="data-col m-auto">
                        <h1>{vaccineCountryData?.timeline[0].daily || "-"}</h1>
                        <span>Vaccinated</span>
                        <h3>{vaccineCountryData?.timeline[0].total || "-"}</h3>
                    </Col> : 
                    <Col className="data-col m-auto">  <h1>-</h1>
                        <span>Vaccinated</span>
                        <h3>-</h3></Col>
                  
                }
               
            </Row>

        </Container>
    );
};
export default Data;