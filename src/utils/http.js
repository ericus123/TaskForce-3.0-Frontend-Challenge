/* eslint-disable no-undef */
import axios from "axios";

export const CovidDataRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});