/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "../comps/Footer";
import toJson from "enzyme-to-json";


configure({adapter: new Adapter()});
it("renders footer without crashing", () => {
    let wrapper = shallow(<Footer />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

