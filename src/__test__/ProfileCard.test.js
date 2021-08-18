/* eslint-disable no-undef */
import React from "react";
import { shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProfileCard from "../comps/ProfileCard";

configure({adapter: new Adapter()});
it("renders profile card without crashing", () => {
    shallow(<ProfileCard />);
});

