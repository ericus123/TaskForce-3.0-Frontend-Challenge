import { combineReducers } from "redux";

import CovidDataReducer from "./CovidData";
// function that contains all reducer objects.
const allReducers = combineReducers({
    CovidDataReducer
});

export default allReducers;
