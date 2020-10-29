import axios from 'axios';
import * as actionTypes from './actionTypes'

const API_KEY = 'MGXBvA6P382vGZRSypWwdhBCjJFllTnG';
const baseUrl = "http://dataservice.accuweather.com/";


export const setWeather = (weather) => {
    return {
        type: actionTypes.SET_WETHEAR_DATA,
        weatherForcast: weather
    }
}
export const getCityCode = (cityName) => {
    return dispatch => {
        const url = "locations/v1/cities/autocomplete?apikey=" + API_KEY + "&q=" + cityName;
        axios.get(baseUrl + url).then(response => {
            dispatch(setWeather(response.data)); // .find(city => city.AdministrativeArea === cityName);
        });
    }
}

export const getCurrentDayForcast = (locationKey) => {
    let result = {};
    const url = "currentconditions/v1/" + locationKey + "?apikey=" + API_KEY;
    axios.get(baseUrl + url).then(response => {
        result = response.data;
    });
    return result;
}

export const getWeeklyForcast = (locationKey) => {
    let result = {};
    const url = "forecasts/v1/daily/5day/" + locationKey + "?apikey=" + API_KEY;
    axios.get(baseUrl + url).then(response => {
        result = response.data;
    });
    return result;
}

// 1)input => getCityCode for get the new cities array 
// 2) => user choose a city -> take city code 
// 3) => getCurrentDayForcast => getWeeklyForcast