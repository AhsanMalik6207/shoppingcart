
import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import CartReducer from './CartReducer'
import {registerUserReducer} from './userReducers'
let rootReducer = combineReducers({CartReducer, registerUserReducer
    });

let store = createStore(rootReducer , applyMiddleware(thunk));

export default store;