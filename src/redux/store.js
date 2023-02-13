import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlice.js'
import displayedCountryReducer from "..redux/slices/displayCountrySlice";

export default configureStore({
    reducer: { 
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
    },
});