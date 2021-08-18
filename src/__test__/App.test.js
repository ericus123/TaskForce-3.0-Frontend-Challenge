/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import App from "../App";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
configure({adapter: new Adapter()});

it("renders without crashing", () => {
    let wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

