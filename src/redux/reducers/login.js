import { initialState } from "../store";
import { SET_ACCESSTOKEN } from "../actions";

export const loginReducer = (state = initialState.login, action) => {
    switch (action.type) {
        case SET_ACCESSTOKEN:
            return {
                ...state,
                accesstoken: action.payload
            } 
        default:
            return state    
    }
}