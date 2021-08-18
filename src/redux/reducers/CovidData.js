import {types} from "../actions/types";

const InitialState = {
    isLoading: false,
    countryDataIsLoading: false,
    countryData: [],
    continentsData: [],
    vaccineData: [],
    vaccineCountryData: []
};

export default function CovidDataReducer(state = InitialState, action) {
    switch (action.type) {
    case types.GET_COUNTRY_DATA_LOADING:
        return {
            ...state,
            countryDataIsLoading: action.payload,
        };
    case types.GET_COUNTRY_DATA_REQUEST:
        return {
            ...state,
            countryData: action.payload,
        };
    case types.GET_CONTINENTS_DATA_LOADING:
        return {
            ...state,
            isLoading: action.payload,
        };
    case types.GET_CONTINENTS_DATA_REQUEST:
        return {
            ...state,
            continentsData: action.payload,
        };
    case types.GET_VACCINES_DATA_LOADING:
        return {
            ...state,
            isLoading: action.payload,
        };
    case types.GET_VACCINES_DATA_REQUEST:
        return {
            ...state,
            vaccinesData: action.payload,
        };

    case types.GET_VACCINES_COUNTRY_DATA_LOADING:
        return {
            ...state,
            isLoading: action.payload,
        };
    case types.GET_VACCINES_COUNTRY_DATA_REQUEST:
        return {
            ...state,
            vaccineCountryData: action.payload,
        };

    default:
        return state;
    }
}
