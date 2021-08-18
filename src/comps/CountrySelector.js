/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { getData } from "country-list";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import React from "react";
const CountrySelector = ({handleChange}) => {
    
    let options = getData();
    options.forEach((country) => country.label =  <> <ReactCountryFlag
        countryCode={country.code}
        svg
        style={{
            width: "2em",
            height: "2em",
        }}
        title={country.name}
    /> {country.name}</>);
    return (
        <Select defaultValue={{ label:  <> <ReactCountryFlag
            countryCode="RW"
            svg
            style={{
                width: "2em",
                height: "2em",
            }}
        /> Rwanda</>, code: "RW",value:"Rwanda" }} options={options} onChange = {(value) => handleChange(value)} />
    );

};
export default CountrySelector;