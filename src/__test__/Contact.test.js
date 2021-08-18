/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Contact from "../comps/Contact";
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});
it("renders contact without crashing", () => {
    let wrapper =  shallow(<Contact />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

