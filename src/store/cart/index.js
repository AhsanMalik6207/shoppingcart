
import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import CartReducer from './CartReducer'
let rootReducer = combineReducers({CartReducer, });

let store = createStore(rootReducer , applyMiddleware(thunk));

export default store;