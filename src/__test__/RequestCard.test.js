/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RequestCard from "../comps/RequestCard";
import {Provider} from "react-redux"; 
import store from "../redux/store";
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});
it("renders request card without crashing", () => {
    let wrapper = shallow(
        <Provider store={store}><RequestCard /></Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});

