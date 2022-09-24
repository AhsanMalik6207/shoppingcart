
import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import CartReducer from './CartReducer'
import AuthReducer from './AuthReducer';
import message from './message'
let rootReducer = combineReducers({CartReducer, AuthReducer,
    message,});

let store = createStore(rootReducer , applyMiddleware(thunk));

export default store;