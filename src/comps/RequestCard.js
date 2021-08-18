import React from "react";
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCountryData, GetVaccineCountryData } from "../redux/actions";
import {Row, Container, Col, Form, Button, Spinner} from "react-bootstrap";
import CountrySelector from "./CountrySelector";



const RequestCard =   () => {
    const  countryDataIsLoading = useSelector((state) => state.CovidDataReducer.countryDataIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCountryData(country));
        dispatch(GetVaccineCountryData(country,1));
    },[]);
    const [country,setCountry] = useState("Rwanda");
    const handleCountryChange = (value) => {
        setCountry(value);
    };
    const getDays = (date) => {
        const date1 = new Date(date);
        const date2 = new Date();
        const days = parseInt((date2.getTime() - date1.getTime())/(1000 * 3600 * 24));
        return days;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(GetCountryData(country.name));
        dispatch(GetVaccineCountryData(country.name,getDays(e.target.date.value)));
    };
    return (
        <Container>
            <div className="justify-content-md-center req-card-header mt-4">
                <h1 className="updates-title" style={{color:"white"}}>UPDATES</h1>
                <p>Search a country</p>
            </div>
            
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center no-gutters">
                    <Col  md="3" className="mr-0 px-0">
                       
                        <CountrySelector disabled={countryDataIsLoading} handleChange={handleCountryChange}/>
                    </Col>
                    <Col  md="2" className="ml-0 px-0" style={{borderRadius:"0px", background:"white"}} >
                        <input  disabled={countryDataIsLoading} required style={{border:"none", padding:"4px"}} type="date" name="date"/>
                   
                    </Col>
                    <Col md="1" className="ml-0 px-0" style={{borderRadius:"0px"}}>
                        <Button disabled={countryDataIsLoading} style={{background:"#1E776E"}} type="submit">
                            {countryDataIsLoading ? (
                                <Spinner size="sm" animation="border"></Spinner>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </Col>
                    
                </Row>
            </Form>
        </Container>
    );
};
export default RequestCard;