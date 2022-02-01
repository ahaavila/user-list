import { combineReducers } from 'redux';
import userReducer from './userReducer';

const Reducers = combineReducers({
  users: userReducer,
});

export default Reducers;
