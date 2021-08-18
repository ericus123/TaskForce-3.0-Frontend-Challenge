/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navbar } from "react-bootstrap";
import toJson from "enzyme-to-json";


configure({adapter: new Adapter()});
it("renders navbar without crashing", () => {

    let wrapper = shallow(<Navbar />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

