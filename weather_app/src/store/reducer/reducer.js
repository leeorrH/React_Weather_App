import * as actionTypes from '../actions/actionTypes'

const initialState = {
    weather:null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INGREDIENT:
            return {
                ...state,
                weather:{
                    ...state.weather,
                   weather: state.weather
                }
            }


            default:
                return state
    }
}

export default reducer