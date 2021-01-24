import * as actionTypes from '../actions/actionTypes'

const initialState = {
    weatherForcast: undefined,
}

// add redux to  FC 
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_WETHEAR_DATA_DAY:
            return {
                ...state,
                weatherForcastDay: action.weatherForcastDay
            }
        case actionTypes.SET_WETHEAR_DATA_WEEK:
            return {
                ...state,
                weatherForcastWeek: action.weatherForcastWeek
            }
        case actionTypes.SET_CITY_NAME : 
            return {
                ...state,
                cityName : action.cityName
            }


        default:
            return state
    }
}

