import { USER_REGISTER_FAILED,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS } from "../Types";
const initialState = {
    user:false
};
export const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_REGISTER_REQUEST": return {
            loading: true
        }
        case "USER_REGISTER_SUCCESS": return {
            loading: false,
            success: true
        }
        case "USER_REGISTER_FAILED": return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}