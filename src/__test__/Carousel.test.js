/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CarouselSlider from "../comps/Reusables/carousel";
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});
it("renders carousel without crashing", () => {
    let data = [
     
        {
            "updated": 1629566946881,
            "cases": 46034110,
            "todayCases": 36826,
            "deaths": 972016,
            "todayDeaths": 933,
            "recovered": 36773591,
            "todayRecovered": 26691,
            "active": 8288503,
            "critical": 28636,
            "casesPerOneMillion": 77453.93,
            "deathsPerOneMillion": 1635.45,
            "tests": 637008449,
            "testsPerOneMillion": 1071788.09,
            "population": 594341787,
            "continent": "North America",
            "activePerOneMillion": 13945.68,
            "recoveredPerOneMillion": 61872.8,
            "criticalPerOneMillion": 48.18,
            "continentInfo": {
                "lat": 31.6768272,
                "long": -146.4707474
            },
            "countries": [
                "Anguilla",
                "Antigua and Barbuda",
                "Aruba",
                "Bahamas",
                "Barbados",
                "Belize",
                "Bermuda",
                "British Virgin Islands",
                "Canada",
                "Caribbean Netherlands",
                "Cayman Islands",
                "Costa Rica",
                "Cuba",
                "Curaçao",
                "Dominica",
                "Dominican Republic",
                "El Salvador",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guatemala",
                "Haiti",
                "Honduras",
                "Jamaica",
                "Martinique",
                "Mexico",
                "Montserrat",
                "Nicaragua",
                "Panama",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Martin",
                "Saint Pierre Miquelon",
                "Saint Vincent and the Grenadines",
                "Sint Maarten",
                "St. Barth",
                "Trinidad and Tobago",
                "Turks and Caicos Islands",
                "USA"
            ]
        },
    ];
    let wrapper = shallow(<CarouselSlider data={data}/>);
    expect(toJson(wrapper)).toMatchSnapshot();

});

