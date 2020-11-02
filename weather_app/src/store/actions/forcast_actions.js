import axios from 'axios';
import * as actionTypes from './actionTypes'

const API_KEY = 'MGXBvA6P382vGZRSypWwdhBCjJFllTnG';
const baseUrl = "http://dataservice.accuweather.com/";


export const setWeatherDay = (weatherDay) => {
    return {
        type: actionTypes.SET_WETHEAR_DATA_DAY,
        weatherForcastDay: weatherDay
    }
}

export const setWeatherWeek = (weatherWeek) => {
    return {
        type: actionTypes.SET_WETHEAR_DATA_WEEK,
        weatherForcastWeek: weatherWeek
    }
}

export const weatherData = (cityName) => {
    return dispatch => {
        const url = "locations/v1/cities/autocomplete?apikey=" + API_KEY + "&q=" + cityName;
        axios.get(baseUrl + url).then(response => {
          
            let locationKey = response?.data?.find(city => city.AdministrativeArea.LocalizedName.toLowerCase() === cityName).Key;
            dispatch(getCurrentDayForcast(locationKey));
            dispatch(getWeeklyForcast(locationKey));
        });
    }
}

export const getCurrentDayForcast = (locationKey) => {
    return dispatch => {
        const url = "currentconditions/v1/" + locationKey + "?apikey=" + API_KEY;
        axios.get(baseUrl + url).then(response => {
            dispatch(setWeatherDay(response.data));
        });
    }
}

export const getWeeklyForcast = (locationKey) => {
    return dispatch => {
        const url = "forecasts/v1/daily/5day/" + locationKey + "?apikey=" + API_KEY;
        axios.get(baseUrl + url).then(response => {
            dispatch(setWeatherWeek(response.data));
        });
    }
}

// 1)input => getCityCode for get the new cities array 
// 2) => user choose a city -> take city code 
// 3) => getCurrentDayForcast => getWeeklyForcast