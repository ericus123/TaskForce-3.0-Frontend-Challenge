/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CountrySelector from "../comps/CountrySelector";
import {Provider} from "react-redux"; 
import store from "../redux/store";
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});
it("renders country elector without crashing", () => {
   
    let wrapper = shallow(
        <Provider store={store}> <CountrySelector /></Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();

});

