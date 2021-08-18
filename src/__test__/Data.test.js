/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Data from "../comps/Data";
import {Provider} from "react-redux"; 
import store from "../redux/store";
import toJson from "enzyme-to-json";
configure({adapter: new Adapter()});

it("renders country data without crashing", () => {
    const  countryData =
{
    "updated": 1629566946482,
    "country": "Rwanda",
    "countryInfo": {
        "_id": 646,
        "iso2": "RW",
        "iso3": "RWA",
        "lat": -2,
        "long": 30,
        "flag": "https://disease.sh/assets/img/flags/rw.png"
    },
    "cases": 82215,
    "todayCases": 0,
    "deaths": 1005,
    "todayDeaths": 0,
    "recovered": 45204,
    "todayRecovered": 0,
    "active": 36006,
    "critical": 43,
    "casesPerOneMillion": 6175,
    "deathsPerOneMillion": 75,
    "tests": 2285145,
    "testsPerOneMillion": 171622,
    "population": 13315025,
    "continent": "Africa",
    "oneCasePerPeople": 162,
    "oneDeathPerPeople": 13249,
    "oneTestPerPeople": 6,
    "activePerOneMillion": 2704.16,
    "recoveredPerOneMillion": 3394.96,
    "criticalPerOneMillion": 3.23
};
    const  vaccineCountryData = {
        "country": "Rwanda",
        "timeline": [
            {
                "total": 1344627,
                "daily": 0,
                "totalPerHundred": 0,
                "dailyPerMillion": 0,
                "date": "8/21/21"
            }
        ]
    };

    let wrapper = shallow(
        <Provider store={store}>
            <Data countryData={countryData} vaccineCountryData={vaccineCountryData}/>
        </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot(); 
});

