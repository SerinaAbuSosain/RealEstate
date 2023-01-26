import {combineReducers,createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import dimensions from './reducers/Dimensions'


const Reducers = {data: {dimensions}};

const store=createStore(dimensions, applyMiddleware(thunk));

export default  store
