/* eslint-disable import/no-anonymous-default-export */
import {GET_APOD, SET_LOADING} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_APOD:
            return {
                ...state,
                data: action.payload,
                loading:false
            }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state
    }
}
