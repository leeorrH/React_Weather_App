import * as actionTypes from '../actions/actionTypes'

const initialState = {
    weatherForcast: undefined,
}
// add payload - data to pass 
// add asyc init 
// add redux to  FC 
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_WETHEAR_DATA:
            return {
                ...state,
                weatherForcast: action.weatherForcast
            }

            default:
                return state
    }
}

