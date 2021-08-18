/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import Container from "../Container";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import store from "../redux/store";


configure({adapter: new Adapter()});

it("renders container without crashing", () => {
    let wrapper = shallow(
        <Provider store={store}><Container /></Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
});

