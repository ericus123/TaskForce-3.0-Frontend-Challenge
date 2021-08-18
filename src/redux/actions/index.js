import {CovidDataRequest} from "../../utils/http";
import { types } from "./types";

export const GetContinentData = () => async (dispatch) => {

    try {
        dispatch({type: types.GET_CONTINENTS_DATA_LOADING, payload:true});
        const res = await CovidDataRequest.get("/continents");
        console.log(res.data);
        dispatch({type: types.GET_CONTINENTS_DATA_REQUEST, payload: res.data});
    } catch (error) {
        dispatch({type: types.GET_CONTINENTS_DATA_LOADING, payload:false});
    }
    dispatch({type: types.GET_CONTINENTS_DATA_LOADING, payload:false});
};
export const GetCountryData = (country) => async (dispatch) => {

    try {
        dispatch({type: types.GET_COUNTRY_DATA_LOADING, payload:true});
        const res = await CovidDataRequest.get(`/countries/${country}`,{params:{twoDaysAgo:true}});
        console.log(res.data);
        dispatch({type: types.GET_COUNTRY_DATA_REQUEST, payload: res.data});
    } catch (error) {
        dispatch({type: types.GET_COUNTRY_DATA_LOADING, payload:false});
    }
    dispatch({type: types.GET_COUNTRY_DATA_LOADING, payload:false});
};

export const GetVaccineData = () => async (dispatch) => {

    try {
        dispatch({type: types.GET_VACCINES_DATA_LOADING,payload:true});
        const res = await CovidDataRequest.get("/vaccine/coverage?lastdays=2&fullData=true");
        dispatch({type: types.GET_VACCINES_DATA_REQUEST, payload: res.data});
    } catch (error) {
        dispatch({type: types.GET_VACCINES_DATA_REQUEST, payload: []});
    }
    dispatch({type: types.GET_VACCINES_DATA_LOADING,payload:false});
};

export const GetVaccineCountryData = (country,days) => async (dispatch) => {

    try {
        dispatch({type: types.GET_VACCINES_COUNTRY_DATA_LOADING,payload:true});
        const res = await CovidDataRequest.get(`/vaccine/coverage/countries/${country}`,{params:{lastdays:days,fullData:true}});
        dispatch({type: types.GET_VACCINES_COUNTRY_DATA_REQUEST, payload: res.data});
    } catch (error) {
        dispatch({type: types.GET_VACCINES_COUNTRY_DATA_REQUEST, payload: []});
    }
    dispatch({type: types.GET_VACCINES_COUNTRY_DATA_LOADING,payload:false});
};